import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-dataproduct',
  templateUrl: './dataproduct.component.html',
  styleUrls: ['./dataproduct.component.css'],
})
export class DataproductComponent implements OnInit {
  @Input() product: Product = new Input();
  @Output() productCartId: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log('Agregar al carrito');
    this.cartService.addCart(this.product);
    /* this.productCartId.emit(this.products.id); */
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
