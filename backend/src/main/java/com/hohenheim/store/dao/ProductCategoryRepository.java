package com.hohenheim.store.dao;

import com.hohenheim.store.dto.CategoryDTO;
import com.hohenheim.store.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
@RestResource(path = "findCategoryIdsAndNames", rel = "findCategoryIdsAndNames")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    @Query("SELECT new com.hohenheim.store.dto.CategoryDTO(c.id, c.categoryName) FROM ProductCategory c")
    List<CategoryDTO> findCategoryIdsAndNames();
}
