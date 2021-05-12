package com.ma29.isnotnull;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
public class IsnotnullApplication {

	public static void main(String[] args) {
		SpringApplication.run(IsnotnullApplication.class, args);
	}

}
