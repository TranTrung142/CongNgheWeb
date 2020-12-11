package com.example.CNWEB.Product.service.Impl;

import com.example.CNWEB.Product.entity.Category;
import com.example.CNWEB.Product.repository.CategoryRepository;
import com.example.CNWEB.Product.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Optional<Category> findById(Integer catId) {
        try {
            return categoryRepository.findById(catId);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findById error" + ex.toString());
            return Optional.empty();
        }
    }

    @Override
    public Page<Category> findAllByPage(Pageable pageable) {
        try {
            return categoryRepository.findAllByPage(pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findAllByPage error" + ex.toString());
            return null;
        }
    }

    @Override
    public Page<Category> findCategory(String name, Pageable pageable) {
        try {
            return categoryRepository.findCategory(name, pageable);
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findCategory error" + ex.toString());
            return null;
        }
    }
}
