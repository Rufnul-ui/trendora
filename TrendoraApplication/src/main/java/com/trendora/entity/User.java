package com.trendora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
//    id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    name
    @Column(nullable = false)
    private String name;

//    email
    @Column(unique = true, nullable = false)
    private String email;

//    password
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

//    phone
    @Column(unique = true, length = 10)
    private String phone;

//    timestamp
    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;
}
