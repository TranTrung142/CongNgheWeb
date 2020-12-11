package com.example.CNWEB.Bill.entity;

import com.example.CNWEB.Customer.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table( schema = "cnWeb", name = "bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer billId;

    @Column(name = "code")
    private String billCode;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name = "discount")
    private BigDecimal discount;

    @Column(name = "cash_in")
    private BigDecimal cashIn;

    @Column(name = "cash_out")
    private BigDecimal cashOut;

    @Column(name = "note")
    private String billNote;

    @Column(name = "create_on")
    private Timestamp createOn;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

}
