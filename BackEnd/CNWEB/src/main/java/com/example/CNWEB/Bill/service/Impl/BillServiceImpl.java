package com.example.CNWEB.Bill.service.Impl;

import com.example.CNWEB.Bill.entity.Bill;
import com.example.CNWEB.Bill.repository.BillRepository;
import com.example.CNWEB.Bill.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillRepository billRepository;

    @Override
    public Page<Bill> findAllByPage(Pageable pageable) {
        try {
            return billRepository.findAllByPage(pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findAllByPage error" + ex.toString());
            return null;
        }
    }

    @Override
    public Page<Bill> findBillByCode(String code,Pageable pageable) {
        try {
            return billRepository.findBillByCode(code, pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findBillByCode error" + ex.toString());
            return null;
        }
    }

    @Override
    public Optional<Bill> findById(Integer billId) {
        try {
            return billRepository.findById(billId);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findById error" + ex.toString());
            return Optional.empty();
        }
    }
}
