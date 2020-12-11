package com.example.CNWEB.Product.controller;

import com.example.CNWEB.Product.service.CategoryService;
import com.example.CNWEB.json.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/category")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer catId) {
        return categoryService.findById(catId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAllByPage(@RequestParam("page") Integer page,
                                                    @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(categoryService.findAllByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Category not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }
}
