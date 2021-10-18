import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from '../product';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  horiPos: MatSnackBarHorizontalPosition = 'center';
  verPos: MatSnackBarVerticalPosition = 'bottom';
  displayColumns: string[] = ['name', 'rating', 'price', 'cart'];
  dataSource: MatTableDataSource<IProduct>;
  ratingArr: any[] = [];
  @ViewChild(MatPaginator) paginator:any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private _snackBar: MatSnackBar) {
    const products = Array.from({ length: 50 }, (_, k) =>
      createProducts(k + 1)
    );
    this.dataSource = new MatTableDataSource(products);
    this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.ratingArr.push(index);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addToCart(){
    this._snackBar.open('Item has been added', 'close', {
      horizontalPosition: this.horiPos,
      verticalPosition: this.verPos,
      duration: 3000
    })
  }

  showIcon(index: number, rating: number) {
    if (rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const IMAGES: string[] = [
  'https://cdn.vox-cdn.com/thumbor/VglrPerYWsS9nkgrDe6KKXrimww=/0x0:2560x1440/920x613/filters:focal(1076x516:1484x924):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66934585/ishMfuW.0.png',
  'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FWbn?ver=b088&q=90&m=6&h=417&w=740&b=%23FFFFFFFF&l=f&o=t&aim=true',
  'https://www.zdnet.com/a/hub/i/2021/01/07/e299f286-f53f-4fca-81d7-cf97d662ef3f/iphone-12-max-pro-review-best-phone.png',
  'https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L._AC_SL1500_.jpg',
];

function createProducts(id: number): IProduct {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
  const image = IMAGES[Math.round(Math.random() * (IMAGES.length - 1))];
  var val = Math.floor(1000 + Math.random() * 9000);
  let code = 'NEW-' + val;

  return{
    id: id,
    name: name,
    code: code,
    price: Math.floor(Math.random() *(100000 - 1000 + 1)) + 1000,
    releaseDate: '',
    descrip: 'New Profuct Generation',
    rating: Math.floor(Math.random() * (5 + 1)),
    imageUrl: image
  }
}
