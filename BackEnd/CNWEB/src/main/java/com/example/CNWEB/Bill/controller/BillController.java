package com.example.CNWEB.Bill.controller;

import com.example.CNWEB.Bill.service.BillService;
import com.example.CNWEB.json.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/bill")
public class BillController {

    @Autowired
    private BillService billService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer billId) {
        return billService.findById(billId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }
    
    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAllByPage(@RequestParam("page") Integer page,
                                                    @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(billService.findAllByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Bill not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

}
