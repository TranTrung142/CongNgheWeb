package com.example.CNWEB.Auth.Entity;

import com.example.CNWEB.Auth.Helper.ERole;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Data
@Entity
@Table(schema = "cnweb" , name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    private ERole name;
    public Role() {

    }

}
