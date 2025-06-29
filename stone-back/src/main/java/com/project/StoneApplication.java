package com.project;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@MapperScan("com.project.mapper")
@EnableAspectJAutoProxy
@EnableScheduling
public class StoneApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {

        SpringApplication.run(StoneApplication.class, args);
    }
}
