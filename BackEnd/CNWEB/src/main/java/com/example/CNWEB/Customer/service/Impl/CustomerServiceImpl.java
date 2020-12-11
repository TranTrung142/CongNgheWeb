package com.example.CNWEB.Customer.service.Impl;

import com.example.CNWEB.Customer.entity.Customer;
import com.example.CNWEB.Customer.repository.CustomerRepository;
import com.example.CNWEB.Customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public Page<Customer> findAllActiveByPage(Pageable pageable) {
        try {
            return customerRepository.findAllActiveByPage(pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findAllActiveByPage error" + ex.toString());
            return null;
        }
    }

    @Override
    public Optional<Customer> findById(Integer customerId) {
        try {
            return customerRepository.findById(customerId);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findById error" + ex.toString());
            return Optional.empty();
        }
    }


    @Override
    public Page<Customer> findActiveCustomer(String name, Pageable pageable) {
        try {
            return customerRepository.findActiveCustomer(name, pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findActiveCustomer error" + ex.toString());
            return null;
        }
    }

    @Override
    public Page<Customer> findAllByPage(Pageable pageable) {
        try {
            return customerRepository.findAllByPage(pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findAllByPage error" + ex.toString());
            return null;
        }
    }
}
