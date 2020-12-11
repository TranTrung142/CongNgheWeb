package com.example.CNWEB.Product.repository;

import com.example.CNWEB.Product.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select p from Product p where p.deleted = false order by p.updateOn desc")
    Page<Product> findAllByPage(Pageable pageable);

    @Query(value = "select p from Product p where p.deleted = false and p.prodId = ?1")
    Optional<Product> findById(Integer prodId);

    @Query(value = "select p from Product p where p.deleted = false and p.prodCode = ?1")
    Optional<Product> findByProdCode(String prodCode);
}
