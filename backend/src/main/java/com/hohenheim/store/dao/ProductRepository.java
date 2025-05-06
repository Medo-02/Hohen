package com.hohenheim.store.dao;

import com.hohenheim.store.entity.Product;
import com.hohenheim.store.projection.ProductWithImages;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource(excerptProjection = ProductWithImages.class)
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.category.id IN :categories")
    Page<Product> findByCategoryIds(@Param("categories") List<Long> categoryIds, Pageable pageable);

    // Example search/findByNameContaining?name=Java&page=0&size=20'
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);

}
