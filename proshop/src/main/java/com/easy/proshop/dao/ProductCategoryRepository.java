package com.easy.proshop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.easy.proshop.entity.ProductCategory;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Object> {

}
