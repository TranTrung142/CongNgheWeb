package com.example.CNWEB.Common.Error;

import com.example.CNWEB.Common.Exception.DeleteVariantUniqueException;
import com.example.CNWEB.Common.Exception.IdNotFoundException;
import com.example.CNWEB.Common.Exception.OptionNameAlreadyExistsException;
import com.example.CNWEB.Common.Exception.ResourceNotFoundException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ControllerAdvice
public class ProductGlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler({IdNotFoundException.class, ResourceNotFoundException.class})
    public ResponseEntity<ErrorModelResponse> resourceNotFound(Exception e) throws IOException {
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        ErrorModelResponse error = new ErrorModelResponse(timestamp, HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.name(), e.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({OptionNameAlreadyExistsException.class, DeleteVariantUniqueException.class})
    public ResponseEntity<ErrorModelResponse> optionExists(Exception e) throws IOException {
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        ErrorModelResponse error = new ErrorModelResponse(timestamp, HttpStatus.BAD_REQUEST.value(), HttpStatus.BAD_REQUEST.name(), e.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({RuntimeException.class})
    public ResponseEntity<ErrorModelResponse> serverError(Exception e) {
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        ErrorModelResponse error = new ErrorModelResponse(timestamp, HttpStatus.INTERNAL_SERVER_ERROR.value(), HttpStatus.INTERNAL_SERVER_ERROR.name(), e.getMessage());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // error handle for @Valid
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatus status, WebRequest request) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", new Date());
        body.put("status", status.value());
        body.put("error", status.name());
        //Get all errors
        List<String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());

        body.put("message", errors);

        return new ResponseEntity<>(body, headers, status);
    }
}
