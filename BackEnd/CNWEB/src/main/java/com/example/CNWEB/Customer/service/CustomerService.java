package com.example.CNWEB.Customer.service;

import com.example.CNWEB.Customer.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface CustomerService {
    Page<Customer> findAllActiveByPage(Pageable pageable);

    Optional<Customer> findById(Integer customerId);

    Page<Customer> findActiveCustomer(String name, Pageable pageable);

    Page<Customer> findAllByPage(Pageable pageable);
}
