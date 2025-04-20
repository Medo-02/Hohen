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

  private baseUrl = environment.BASE_URL + "product";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    console.log(this.baseUrl);
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
