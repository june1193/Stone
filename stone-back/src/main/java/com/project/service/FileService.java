package com.project.service;
import com.project.mapper.FileDataMapper;
import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service
public class FileService {

    private final FileDataMapper mapper; // 마이바티스 or JPA 매퍼

    public FileService(FileDataMapper  mapper) {
        this.mapper = mapper;
    }

    public String generateFile(String fileName, String readYm) throws IOException {
        // 1. DB에서 데이터 조회
        List<Map<String, Object>> records = mapper.selectAutoPayData(readYm);

        // 2. 현재 시각
        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        // 3. 내용 구성
        StringBuilder sb = new StringBuilder();
        sb.append("파일 생성 시각: ").append(now).append("\n");
        sb.append("조회 연월: ").append(readYm).append("\n\n");

        for (Map<String, Object> row : records) {
            sb.append(row.toString()).append("\n");
        }

        // 4. 파일 생성
        String path = System.getProperty("user.dir") + "/generated";
        File dir = new File(path);
        if (!dir.exists()) dir.mkdirs();

        String filePath = path + "/" + fileName + ".txt";
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write(sb.toString());
        }

        return filePath;
    }
}