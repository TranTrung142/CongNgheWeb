package com.example.CNWEB.Auth.Repository;

import com.example.CNWEB.Auth.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String name);

    Boolean existsByEmail(String email);

}
