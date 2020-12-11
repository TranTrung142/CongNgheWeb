package com.example.CNWEB.Common.Exception;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Data
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class OptionNameAlreadyExistsException extends RuntimeException {

    public OptionNameAlreadyExistsException(){
        super(String.format("Tên thuộc tính đã tồn tại."));
    }

}
