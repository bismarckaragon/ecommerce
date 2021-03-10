import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductServiceService } from '../../../core/services/product/product-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  addCartid(id: number) {
    console.log(id);
  }
  productos: Product[] = [];

  constructor(private productsService: ProductServiceService) {}

  ngOnInit() {
    this.fetchProducts();
    /*   this.productos = this.productsService.getAllProducts();
     */
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.productos = products;
    });
  }
}
