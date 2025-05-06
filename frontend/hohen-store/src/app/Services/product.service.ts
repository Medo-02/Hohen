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

  getProductList(first: number, rows: number, sortType: String): Observable<{ products: Product[], totalElements: number }> {
    let params = `?page=${Math.floor(first / rows)}&size=${rows}`;
    if (sortType !== undefined) {
      params+= `&sort=${sortType}`
    }
    return this.httpClient.get<GetResponse>(this.baseUrl+params).pipe(
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