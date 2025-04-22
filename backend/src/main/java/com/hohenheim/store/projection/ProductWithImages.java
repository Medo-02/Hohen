package com.hohenheim.store.projection;

import com.hohenheim.store.entity.Product;
import com.hohenheim.store.entity.ProductImage;
import org.springframework.data.rest.core.config.Projection;

import java.math.BigDecimal;
import java.util.List;

@Projection(name = "productWithImages", types = Product.class)
public interface ProductWithImages {
    Long getId();
    String getName();
    String getDescription();
    BigDecimal getUnitPrice();
    boolean getActive();
    int getUnitsInStock();
    List<ProductImage> getProductImages(); 
}
