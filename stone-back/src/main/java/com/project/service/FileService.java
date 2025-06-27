package com.project.service;
//import com.project.mapper.FileDataMapper;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FileService {

    //private final FileDataMapper fileDataMapper;

    //public FileService(FileDataMapper fileDataMapper) {
       // this.fileDataMapper = fileDataMapper;
   // }

    public String generateFile(String fileName, String readYm) throws IOException {
        //List<Map<String, Object>> data = fileDataMapper.selectAutoPayData(readYm);

        // 2. 임시 데이터 (DB 대신)
        List<Map<String, Object>> data = new ArrayList<>();

        Map<String, Object> row1 = new HashMap<>();
        row1.put("USER_NAME", "박명수");
        row1.put("AMOUNT", 12000);

        Map<String, Object> row2 = new HashMap<>();
        row2.put("USER_NAME", "유재석");
        row2.put("AMOUNT", 15000);

        data.add(row1);
        data.add(row2);


        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        StringBuilder sb = new StringBuilder();
        sb.append("생성시각: ").append(now).append("\n");
        sb.append("조회연월: ").append(readYm).append("\n\n");

        for (Map<String, Object> row : data) {
            sb.append(row.toString()).append("\n");
        }

        String dirPath = System.getProperty("user.dir") + "/generated";
        new File(dirPath).mkdirs();

        String filePath = dirPath + "/" + fileName + ".txt";
        try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(filePath), StandardCharsets.UTF_8))) {
            writer.write(sb.toString());
        }

        return filePath;
    }
}