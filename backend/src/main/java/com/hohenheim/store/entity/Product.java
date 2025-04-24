package com.hohenheim.store.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="product")
public class Product {
    // Map database table fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    // Join on the category_id of the category table
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "unitPrice")
    private BigDecimal unitPrice;

    @Column(name = "active")
    private boolean active;

    @Column(name = "unitsInStock")
    private int unitsInStock;

    @Column(name = "dateCreated")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "lastUpdated")
    @UpdateTimestamp
    private Date lastUpdated;

    // Create relationship between product and images
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<ProductImage> productImages = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductCategory getCategory() {
        return category;
    }

    public void setCategory(ProductCategory category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }


    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public int getUnitsInStock() {
        return unitsInStock;
    }

    public void setUnitsInStock(int unitsInStock) {
        this.unitsInStock = unitsInStock;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public List<ProductImage> getProductImages() {
        return productImages;
    }

    public void setProductImages(List<ProductImage> productImages) {
        this.productImages = productImages;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", category=" + category +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", unitPrice=" + unitPrice +
                ", active=" + active +
                ", unitsInStock=" + unitsInStock +
                ", dateCreated=" + dateCreated +
                ", productImages=" + productImages +
                ", lastUpdated=" + lastUpdated +
                '}';
    }
}
