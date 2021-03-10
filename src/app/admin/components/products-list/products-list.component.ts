import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductServiceService } from '../../../core/services/product/product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productsService: ProductServiceService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      this.fetchProducts();
    });
  }
}
