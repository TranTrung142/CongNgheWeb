package com.example.CNWEB.Customer.controller;

import com.example.CNWEB.Customer.service.CustomerService;
import com.example.CNWEB.json.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer customerId) {
        return customerService.findById(customerId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all-active")
    public ResponseEntity<JsonResult> findAllActiveByPage(@RequestParam("page") Integer page,
                                                          @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(customerService.findAllActiveByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Customer not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findActiveCustomer(@RequestParam("name") String name,
                                                         @RequestParam("page") Integer page,
                                                         @RequestParam("size") Integer size ) {
        Pageable pageable = PageRequest.of(page, size);
        if(name.isEmpty()) {
            return Optional.ofNullable(customerService.findAllActiveByPage(pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Customer not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(customerService.findActiveCustomer(name, pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Customer not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAllByPage(@RequestParam("page") Integer page,
                                                    @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(customerService.findAllByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Customer not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

}
