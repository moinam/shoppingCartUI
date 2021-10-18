import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  rowCount: any[] = [];
  errorMessage = '';
  title: string = 'Shopping Cart';
  images = [
    'assets/img/BingImageOfTheDay.jpg',
    'assets/img/BingImageOfTheDay_20200702.jpg',
    'assets/img/BingImageOfTheDay_20200703.jpg',
  ];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    let rowCount: number = 1;
    let dataCount: number = 1;
    this.productService.getCartItems().subscribe(
      (products) => {
        products.forEach((product) =>{
          this.products.push({ product: product, row: rowCount });
          if(dataCount < 4){
            dataCount = dataCount + 1;
          } else {
            dataCount = 1;
            this.rowCount.push(rowCount);
            rowCount = rowCount + 1;
          }
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
}
