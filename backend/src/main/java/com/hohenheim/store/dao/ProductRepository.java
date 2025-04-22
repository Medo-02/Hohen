package com.hohenheim.store.dao;

import com.hohenheim.store.entity.Product;
import com.hohenheim.store.projection.ProductWithImages;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// accept calls from web browser
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(excerptProjection = ProductWithImages.class)
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
