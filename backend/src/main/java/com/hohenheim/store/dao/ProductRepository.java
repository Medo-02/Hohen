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

@RepositoryRestResource(excerptProjection = ProductWithImages.class, path = "products", collectionResourceRel = "products")
public interface ProductRepository extends JpaRepository<Product, Long> {
    // search/findByNameAndCategory?name=Asus&categories=1&page=0&size=20&sort=unitPrice=desc
    @Query("SELECT p FROM Product p WHERE (:name IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))) " +
           "AND (:categories IS NULL OR p.category.id IN :categories)")
    Page<Product> findByNameAndCategory(
        @Param("name") String name,
        @Param("categories") List<Long> categories,
        Pageable pageable
    );
}