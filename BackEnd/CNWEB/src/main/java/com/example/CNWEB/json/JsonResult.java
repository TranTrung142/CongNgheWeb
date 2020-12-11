package com.example.CNWEB.json;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@Data
@AllArgsConstructor
public class JsonResult {
    private static final String CONTENT_TYPE = "application/json; charset=utf-8";
    private String result;
    private Object data;

    public static com.example.CNWEB.json.JsonResult build(String result, Object data) {
        return new com.example.CNWEB.json.JsonResult(result, data);
    }

    public static ResponseEntity<JsonResult> success(Object data) {
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("success", data));
    }

    public static ResponseEntity<JsonResult> found(Object data) {
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("found", data));
    }

    public static ResponseEntity<JsonResult> notFound(Object data) {
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("not found", data + " not existed"));
    }

    public static ResponseEntity<JsonResult> idNotFound() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("not found", "id is not exist"));
    }

    public static ResponseEntity<JsonResult> parentNotFound(String parent) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("not found", parent + " is not exist"));
    }

    public static ResponseEntity<JsonResult> badRequest(String mess) {
        return ResponseEntity.badRequest().contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("fail", mess));
    }

    public static ResponseEntity<JsonResult> serverError(String mess) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("error", mess));
    }

    public static ResponseEntity<JsonResult> saveError(String object) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("error", "Save " + object + " fail!"));
    }

    public static ResponseEntity<JsonResult> uploaded(Object saved) {
        return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("uploaded", saved));
    }

    public static ResponseEntity<JsonResult> updated(Object saved) {
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("updated", saved));
    }

    public static ResponseEntity<JsonResult> deleted() {
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf(CONTENT_TYPE)).body(com.example.CNWEB.json.JsonResult.build("deleted", "deleted"));
    }
}
