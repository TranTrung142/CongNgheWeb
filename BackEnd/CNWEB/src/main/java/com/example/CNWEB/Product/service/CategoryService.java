package com.example.CNWEB.Product.service;

import com.example.CNWEB.Product.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface CategoryService  {

    Optional<Category> findById(Integer idCat);

    Page<Category> findAllByPage(Pageable pageable);

    Page<Category> findCategory(String name, Pageable pageable);


}
