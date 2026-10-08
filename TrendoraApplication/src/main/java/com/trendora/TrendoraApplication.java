package com.trendora;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TrendoraApplication {

	public static void main(String[] args) {

		SpringApplication.run(TrendoraApplication.class, args);
		System.out.println("Trendora Project Running Successfully...");
	}

}
