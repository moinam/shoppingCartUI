import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoModalComponent } from '../products/product-info-modal/product-info-modal.component';

@Component({
  selector: 'app-home-product-view',
  templateUrl: './home-product-view.component.html',
  styleUrls: ['./home-product-view.component.css'],
})
export class HomeProductViewComponent implements OnInit {
  @Input() rowCount: any;
  @Input() data: any;
  ratingArr: any[] = [];

  constructor(public dialog: MatDialog) {}

  getRowData(rowNumber: number): any[] {
    let rowData: any[] = [];
    this.data.forEach((dataCell: any) => {
      if (rowNumber == dataCell.row) {
        rowData.push(dataCell);
      }
    });
    return rowData;
  }

  openDialog(data: any){
    const dilaogRef = this.dialog.open(ProductInfoModalComponent, {data});
    dilaogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showIcon(index: number, rating: number) {
    if (rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.ratingArr.push(index);
    }
  }
}
