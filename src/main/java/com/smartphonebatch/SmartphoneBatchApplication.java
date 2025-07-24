package com.smartphonebatch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.kafka.annotation.EnableKafka;


@SpringBootApplication
@EnableKafka
@EntityScan(basePackages = "com.smartphonebatch.model")
@EnableJpaRepositories(basePackages = "com.smartphonebatch.repository")
public class SmartphoneBatchApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(SmartphoneBatchApplication.class, args);

    }
}
