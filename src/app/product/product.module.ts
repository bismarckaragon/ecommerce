import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataproductComponent } from './components/dataproduct/dataproduct.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    DataproductComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule, MaterialModule],
})
export class ProductModule {}
