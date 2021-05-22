import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoModalComponent } from './product-info-modal/product-info-modal.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductInfoModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
