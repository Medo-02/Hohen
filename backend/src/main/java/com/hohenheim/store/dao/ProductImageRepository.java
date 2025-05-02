package com.hohenheim.store.dao;


import com.hohenheim.store.entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
}
