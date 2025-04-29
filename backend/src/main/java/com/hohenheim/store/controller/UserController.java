package com.hohenheim.store.controller;


import com.hohenheim.store.constants.ApplicationConstants;
import com.hohenheim.store.dao.CustomerRepository;
import com.hohenheim.store.dao.UserRepository;
import com.hohenheim.store.entity.LoginRequest;
import com.hohenheim.store.entity.LoginResponse;
import com.hohenheim.store.entity.User;
import com.hohenheim.store.service.JwtService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

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

    @RequestMapping("/userInfo")
    public User getUserDetailsAfterLogin(Authentication authentication) {
        Optional<User> optionalUser = userRepository.findByEmail(authentication.getName());
        return optionalUser.orElse(null);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        String jwt = "";
        Authentication authentication = UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.username(),
                loginRequest.pwd());
        Authentication authenticationResponse = authenticationManager.authenticate(authentication);

        if (authenticationResponse != null && authenticationResponse.isAuthenticated()) {
            jwt = jwtService.generateToken(authenticationResponse);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new LoginResponse(HttpStatus.OK.getReasonPhrase(), jwt));
    }
}
