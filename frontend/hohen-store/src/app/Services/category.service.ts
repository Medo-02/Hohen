import { Injectable } from '@angular/core';
import { environment } from '../environments/enviornment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/category';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = environment.BASE_URL + "categories";
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<any[]>(this.baseUrl).pipe(
      map(response => 
        response.map(item => ({
          id: item.id,
          categoryName: item.categoryName
        }))
      ))
  }
}

