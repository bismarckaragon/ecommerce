import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductServiceService } from './services/product/product-service.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductServiceService, CartService],
})
export class CoreModule {}
