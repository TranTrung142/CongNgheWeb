package com.example.CNWEB.Bill.service;

import com.example.CNWEB.Bill.entity.Bill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BillService {
    Page<Bill> findAllByPage(Pageable pageable);

    Optional<Bill> findById(Integer billId);

    Page<Bill> findBillByCode(String code, Pageable pageable);
}
