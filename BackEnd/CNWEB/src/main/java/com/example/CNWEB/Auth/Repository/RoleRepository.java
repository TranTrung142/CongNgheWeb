package com.example.CNWEB.Auth.Repository;

import com.example.CNWEB.Auth.Entity.Role;
import com.example.CNWEB.Auth.Helper.ERole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
