import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product-info-modal',
  templateUrl: './product-info-modal.component.html',
  styleUrls: ['./product-info-modal.component.css']
})
export class ProductInfoModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dataCell:any) { }

  ngOnInit(): void {
  }

}
