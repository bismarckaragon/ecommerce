import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductServiceService } from '../../../core/services/product/product-service.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProducts(id);
      /* this.product = this.ProductServiceService.getProducts(id) as Product; */
    });
  }

  fetchProducts(id: string) {
    this.productsService.getProducts(id).subscribe((products) => {
      this.product = products;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    };
    this.productsService.createProduct(newProduct).subscribe((products) => {
      console.log(products);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Nueva Edicion',
      price: 50000,
      description: 'Ya es una edicion',
    };
    this.productsService
      .updateProduct('2', updateProduct)
      .subscribe((products) => {
        console.log(products);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('2').subscribe((rta) => {
      console.log(rta);
    });
  }
}
