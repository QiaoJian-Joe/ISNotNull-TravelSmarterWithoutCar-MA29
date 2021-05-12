package com.ma29.isnotnull.controller;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.boot.web.servlet.server.Jsp;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import entity.ActiveTravel;
import entity.POI;
import entity.Trail;

@Controller
public class TestController {
    @RequestMapping("/hello")
    @ResponseBody
    public String json() throws Exception{
        SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
        FileInputStream is;
        String filePath;
        try{
           filePath = System.getProperty("user.dir")+"/src/main/resources/mybatis-config.xml";
           is = new FileInputStream(filePath);
           SqlSessionFactory factory = builder.build(is);
           SqlSession sqlSession = factory.openSession();
           List<POI> pois = sqlSession.selectList("findAllPOI");
           return pois.toString();
        }catch (Exception e){
            filePath = System.getProperty("user.dir")+"/classes/mybatis-config.xml";
            is = new FileInputStream(filePath);
            SqlSessionFactory factory = builder.build(is);
            SqlSession sqlSession = factory.openSession();
            List<POI> pois = sqlSession.selectList("findAllPOI");
            return pois.toString();
        }
      
    }
}
