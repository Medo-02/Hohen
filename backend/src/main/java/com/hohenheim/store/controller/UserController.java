package com.hohenheim.store.controller;


import com.hohenheim.store.dao.CustomerRepository;
import com.hohenheim.store.dao.UserRepository;
import com.hohenheim.store.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            String hashPwd = passwordEncoder.encode(user.getPwd());
            user.setPwd(hashPwd);
            User savedUser = userRepository.save(user);

            if (savedUser.getId() > 0) {
                return ResponseEntity.status(HttpStatus.CREATED)
                        .body("User registered successfully");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("User registration failed");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exepction occured: " + e.getMessage());
        }
    }
}
