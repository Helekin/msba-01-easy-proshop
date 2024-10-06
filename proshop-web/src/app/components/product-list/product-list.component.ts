import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProducts();
    });
  }

  getProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.getProductsByKeyword();
    } else {
      this.getAllProducts();
    }
  }

  getProductsByKeyword() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.getProductsByKeyword(keyword).subscribe((data) => {
      this.products = data;
    });
  }

  getAllProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 1;
    }

    this.productService
      .getProducts(this.currentCategoryId)
      .subscribe((data) => (this.products = data));
  }
}
