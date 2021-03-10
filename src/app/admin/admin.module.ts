import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormControlComponent,
    ProductEditComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
