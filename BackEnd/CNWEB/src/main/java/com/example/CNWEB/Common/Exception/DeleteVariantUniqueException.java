package com.example.CNWEB.Common.Exception;

import lombok.Data;

@Data
public class DeleteVariantUniqueException extends RuntimeException{
    public DeleteVariantUniqueException(){
        super(String.format("Không thể xoá phiên bản duy nhất của sản phẩm"));
    }
}
