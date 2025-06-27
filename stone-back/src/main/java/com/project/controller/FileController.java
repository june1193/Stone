package com.project.controller;
import com.project.service.FileService;
import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/file")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/generate")
    public ResponseEntity<String> generateFile(@RequestParam String fileName, @RequestParam String readYm) {
        try {
            String filePath = fileService.generateFile(fileName, readYm);
            return ResponseEntity.ok("파일 생성 완료: " + filePath);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("파일 생성 실패: " + e.getMessage());
        }
    }
}
