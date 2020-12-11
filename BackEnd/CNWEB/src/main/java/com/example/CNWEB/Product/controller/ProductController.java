package com.example.CNWEB.Product.controller;

import com.example.CNWEB.Product.service.CategoryService;
import com.example.CNWEB.Product.service.ProductService;
import com.example.CNWEB.json.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {

    @Autowired
    ProductService productService;
    @Autowired
    CategoryService categoryService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer prodId) {
        return productService.findById(prodId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }
    @GetMapping("/product-code")
    public ResponseEntity<Boolean> findByProductCode(@RequestParam("product_code") String prodCode) {
        return new ResponseEntity<Boolean>(productService.findByProdCode(prodCode), HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAllByPage(@RequestParam int page, @RequestParam int size){
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(productService.findAllByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Product Not Found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

}
