import { Injectable } from '@angular/core';
import { environment } from '../environments/enviornment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../Models/product';
import { catchError, map } from 'rxjs/operators';
import { Category } from '../Models/category';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.BASE_URL + "products";
  constructor(private httpClient: HttpClient) { }

  getProductList(first: number, rows: number, sortType: string, categories: Category[], searchTerm: string): Observable<{ products: Product[], totalElements: number }> {
    let params = new HttpParams()
      .set('page', Math.floor(first / rows).toString()) // Get the page which the first element fall into
      .set('size', rows.toString()); // Specify the number of elements within the page
    
    if (categories && categories.length !== 0) {
      categories.forEach(category => params = params.append('categories', category.id));
    }

    if (sortType !== undefined) {
      params = params.set('sort', sortType);
    }

    if (searchTerm !== undefined) {
      params = params.set('name', searchTerm);
    }

    let url = this.baseUrl + '/search/findByNameAndCategory'
    return this.httpClient.get<GetResponse>(url, { params }).pipe(
      map(response => ({
        products: response._embedded.products,
        totalElements: response.page.totalElements
      }))
    );
  }

  deleteProduct(product: any) {
    let url = this.baseUrl + `/${product.id}`;
    return this.httpClient.delete<any>(url).pipe(
      catchError(error => {
        console.error('Delete failed:', error);
        return throwError(() => error);
      })
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