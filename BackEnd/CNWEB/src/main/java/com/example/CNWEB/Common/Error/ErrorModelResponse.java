package com.example.CNWEB.Common.Error;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ErrorModelResponse {
    private Timestamp timestamp;
    private int status;
    private String error;
    private String message;

    public ErrorModelResponse(Timestamp timestamp, int status, String error, String message){
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
        this.message = message;
    }

}
