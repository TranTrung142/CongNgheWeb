package com.example.CNWEB.Common.Exception;

import lombok.Data;

@Data
public class QuantityLessZeroException  extends RuntimeException {
    private String message;
    public QuantityLessZeroException(){
        this.message = "Số lượng sản phẩm trong kho không đủ";
    }

}