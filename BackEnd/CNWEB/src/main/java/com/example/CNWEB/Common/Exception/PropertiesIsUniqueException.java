package com.example.CNWEB.Common.Exception;

import lombok.Data;

@Data
public class PropertiesIsUniqueException extends  RuntimeException {
    private String message;

    public PropertiesIsUniqueException(String property){
        this.message = property + " must be unique.";
    }

}
