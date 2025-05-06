import { Injectable } from '@angular/core';
import { environment } from '../environments/enviornment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { map } from 'rxjs/operators';
import { Category } from '../Models/category';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.BASE_URL + "products";
  constructor(private httpClient: HttpClient) { }

  getProductList(first: number, rows: number, sortType: string, categories: Category[]): Observable<{ products: Product[], totalElements: number }> {
      let params = new HttpParams()
      .set('page', Math.floor(first / rows).toString())
      .set('size', rows.toString());

    if (categories && categories.length !== 0) {
      categories.forEach(category => params = params.append('categories', category.id));
    } 

    if (sortType !== undefined) {
      params = params.set('sort', sortType);
    }

    const url = categories && categories.length !== 0
      ? `${this.baseUrl}/search/findByCategoryIds`
      : this.baseUrl;

    return this.httpClient.get<GetResponse>(url, {params}).pipe(
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