import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoModalComponent } from './product-info-modal/product-info-modal.component';
import { MaterialModule } from '../common/material-module/material-module.module';


@NgModule({
  declarations: [ProductListComponent, ProductInfoModalComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProductInfoModalComponent]
})
export class ProductsModule {}
