import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
