package com.project.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface FileDataMapper {
    List<Map<String, Object>> selectAutoPayData(@Param("readYm") String readYm);
}
