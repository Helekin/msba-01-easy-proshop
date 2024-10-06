import { Component, OnInit } from '@angular/core';

import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductsByCategory().subscribe((data) => {
      this.productCategories = data;
    });
  }
}
