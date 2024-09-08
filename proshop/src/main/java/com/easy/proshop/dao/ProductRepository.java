package com.easy.proshop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.easy.proshop.entity.Product;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Object> {

}
