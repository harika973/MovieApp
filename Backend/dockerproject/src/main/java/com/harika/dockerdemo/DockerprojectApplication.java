package com.harika.dockerdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DockerprojectApplication {
	
	
	@GetMapping("/message")
	public String getMessage() {
		return "This is docker demo";
	}

	public static void main(String[] args) {
		SpringApplication.run(DockerprojectApplication.class, args);
	}

}
