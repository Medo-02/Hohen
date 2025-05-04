import { Injectable } from '@angular/core';
import { environment } from '../environments/enviornment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.BASE_URL + "products";

  constructor(private httpClient: HttpClient) { }

  getProductList(first: number, rows: number): Observable<{ products: Product[], totalElements: number }> {
    return this.httpClient.get<GetResponse>(this.baseUrl+`?page=${first/rows}&size=${rows}`).pipe(
      map(response => ({
        products: response._embedded.products,
        totalElements: response.page.totalElements
      }))
    );
  }
}


interface GetResponse {
  _embedded: {
    products: Product[];
  };
  page: {
    totalElements: number;
  };
}