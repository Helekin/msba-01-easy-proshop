package com.easy.proshop.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easy.proshop.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Object> {

}
