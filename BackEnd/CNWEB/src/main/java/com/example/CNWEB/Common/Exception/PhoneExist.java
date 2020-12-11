package com.example.CNWEB.Common.Exception;

import lombok.Data;

@Data
public class PhoneExist extends RuntimeException {
    private String message;
    public PhoneExist(){
        this.message = "Số điện thoại đã tồn tại! ";
    }

}
