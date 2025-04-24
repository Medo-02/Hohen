package com.hohenheim.store.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user")
@Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "email")
    private String email;

    @Column(name = "pwd")
    private String pwd;

    @Column(name = "role")
    private String role;

}
