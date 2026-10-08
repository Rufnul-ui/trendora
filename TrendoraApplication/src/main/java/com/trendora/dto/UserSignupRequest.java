package com.trendora.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignupRequest {

    @NotBlank(message = "Name is Required")
    @Size(min = 3, max = 50, message = "Name must be at least 3 characters...")
    private String name;

    @NotBlank(message = "Email is Required")
    @Email(message = "Invalid Email Format...")
    private String email;

    @NotBlank(message = "Password Must be Required")
    @Size(min = 8, max = 64, message = "Password must be at least 8 characters")
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>/?]).*$",
            message = "Password must contain at least one uppercase letter, one number, and one special character"
    )
    private String password;

    @NotBlank(message = "Phone is Required")
    @Pattern(
            regexp = "^[6-9][0-9]{9}$",
            message = "Phone must be exactly 10 digits"
    )
    private String phone;
}