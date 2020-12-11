package com.example.CNWEB.Common.Exception;

import lombok.Data;

@Data
public class IdNotFoundException extends RuntimeException {
    private String message;
    public IdNotFoundException(Integer id, String entity){
        this.message = "Not found id: " + id + " " + entity + ".";
    }

}
