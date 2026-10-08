package com.trendora.repository;

import com.trendora.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String Email);
    boolean existsByEmail(String Email);

    Optional<User> findByPhone(String Phone);
    boolean existsByPhone(String Phone);

}
