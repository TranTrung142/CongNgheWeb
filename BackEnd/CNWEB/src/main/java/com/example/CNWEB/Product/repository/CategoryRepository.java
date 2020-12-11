package com.example.CNWEB.Product.repository;

import com.example.CNWEB.Product.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query(value = "select c from Category c where c.catId = :id")
    Optional<Category> findById(@Param("id") Integer catId);

    @Query(value = "select c from Category c")
    Page<Category> findAllByPage(Pageable pageable);

    @Query(value = "select c from Category c where c.catName like %:name% or c.brand like %:name%")
    Page<Category> findCategory(@Param("name") String name, Pageable pageable);
}
