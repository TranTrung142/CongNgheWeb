package com.example.CNWEB.Product.service.Impl;

import com.example.CNWEB.Product.entity.Product;
import com.example.CNWEB.Product.repository.CategoryRepository;
import com.example.CNWEB.Product.repository.ProductRepository;
import com.example.CNWEB.Product.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    private static final Logger logger =  LoggerFactory.getLogger(ProductServiceImpl.class);

    @Override
    public Optional<Product> findById(Integer prodId) {
        try {
            return productRepository.findById(prodId);
        }catch (Exception e){
            logger.error("Product findById Error: ", e);
            return Optional.empty();
        }

    }

    @Override
    public Boolean findByProdCode(String prodCode) {
        try {
            if(productRepository.findByProdCode(prodCode).isPresent()) {return true;}
            else {return false;}
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("findById error" + ex.toString());
            return false;
        }
    }

    @Override
    public Page<Product> findAllByPage(Pageable pageable) {
        try {
            return productRepository.findAllByPage(pageable);
        }catch (Exception e){
            logger.error("Product findALlByPage Error: ", e);
            return null;
        }

    }
}
