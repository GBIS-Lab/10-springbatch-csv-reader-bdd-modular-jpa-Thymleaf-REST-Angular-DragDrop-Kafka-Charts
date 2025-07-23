package com.smartphonebatch.controller;

import com.smartphonebatch.model.Smartphone;
import com.smartphonebatch.repository.SmartphoneRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

    @RestController
    @RequestMapping("/api/stats")
    @CrossOrigin(origins = "*") // pour autoriser Angular à appeler l'API
    public class SmartphoneStatsController {

        private final SmartphoneRepository smartphoneRepository;

        public SmartphoneStatsController(SmartphoneRepository smartphoneRepository) {
            this.smartphoneRepository = smartphoneRepository;
        }

        @GetMapping("/brands")
        public Map<String, Long> getSmartphoneCountByBrand() {
            List<Smartphone> smartphones = smartphoneRepository.findAll();

            return smartphones.stream()
                    .collect(Collectors.groupingBy(Smartphone::getMarque, Collectors.counting()));
        }

        @GetMapping("/os")
        public Map<String, Long> getSmartphoneCountByOS() {
            return smartphoneRepository.findAll().stream()
                    .collect(Collectors.groupingBy(Smartphone::getOs, Collectors.counting()));
        }

        @GetMapping("/screen-sizes")
        public Map<String, Long> getSmartphoneCountByScreenSizeClass() {
            return smartphoneRepository.findAll().stream()
                    .collect(Collectors.groupingBy(
                            s -> {
                                double size = s.getTailleEcran();
                                if (size < 5) return "Petite (<5\")";
                                else if (size <= 6.5) return "Moyenne (5\"-6.5\")";
                                else return "Grande (>6.5\")";
                            },
                            Collectors.counting()
                    ));
        }

        @GetMapping("/price-ranges")
        public Map<String, Long> getSmartphoneCountByPriceRange() {
            return smartphoneRepository.findAll().stream()
                    .collect(Collectors.groupingBy(
                            s -> {
                                double price = s.getPrix();
                                if (price < 300) return "💸 Économique (<300€)";
                                else if (price <= 700) return "⚖️ Milieu de gamme (300€–700€)";
                                else return "💎 Haut de gamme (>700€)";
                            },
                            Collectors.counting()
                    ));
        }

        @GetMapping("/release-date")
        public Map<Integer, Long> getSmartphonesByYear() {
            Map<Integer, Long> result = smartphoneRepository.findAll().stream()
                    .collect(Collectors.groupingBy(Smartphone::getAnnee, Collectors.counting()));
            return result;
        }
    }