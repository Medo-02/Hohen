package com.hohenheim.store.controller;


import com.hohenheim.store.dao.UserRepository;
import com.hohenheim.store.entity.LoginRequest;
import com.hohenheim.store.entity.LoginResponse;
import com.hohenheim.store.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;



    @RequestMapping("/userInfo")
    public User getUserDetailsAfterLogin(Authentication authentication) {
        Optional<User> optionalUser = userRepository.findByEmail(authentication.getName());
        return optionalUser.orElse(null);
    }


}
