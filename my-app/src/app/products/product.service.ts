import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = '../assets/data/products.json';

  constructor(private httpClient: HttpClient) {}

  getCartItems(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getCartItems().pipe(
      map((products: IProduct[]) => products.find((p) => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = 'Client Error';
    } else {
      errMessage = 'Server Error';
    }
    console.error(errMessage);
    return throwError(errMessage);
  }
}
