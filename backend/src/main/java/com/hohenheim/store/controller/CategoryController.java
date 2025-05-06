package com.hohenheim.store.controller;

import com.hohenheim.store.dao.ProductCategoryRepository;
import com.hohenheim.store.dto.CategoryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CategoryController {

    private final ProductCategoryRepository productCategoryRepository;

    @GetMapping("/categories")
    public List<CategoryDTO> getCategories(){
        return productCategoryRepository.findCategoryIdsAndNames();
    }
}
