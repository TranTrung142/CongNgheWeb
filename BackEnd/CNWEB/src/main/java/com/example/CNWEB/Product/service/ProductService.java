package com.example.CNWEB.Product.service;

import com.example.CNWEB.Product.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    Optional<Product> findById(Integer prodId);

    Boolean findByProdCode(String prodCode);

    Page<Product> findAllByPage(Pageable pageable);

}
