package com.smartphonebatch.controller;

import com.smartphonebatch.config.BatchConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SmartphoneBatchController {

    @Autowired
    private BatchConfig batchConfig;
    
}
