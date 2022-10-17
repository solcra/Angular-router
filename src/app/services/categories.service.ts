import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Category } from './../models/category.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = `${environment.API_URL}/api/categories/`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Category[]>(this.apiUrl, { params });
  }

  getAllCategories(){
    return this.http.get<Category[]>(`${this.apiUrl}/`)
  }

  createCategory(data: Partial<Category>){
    return this.http.post<Category>(`${this.apiUrl}/`,data)
  }

  getCategory(id: string){
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  upCreateCategory(id: string, data: Partial<Category>){
    return this.http.put<Category>(`${this.apiUrl}/${id}`,data)
  }

  checkCategory(name: string){
    return this.http.post(`${this.apiUrl}/availabillity`,{name})
  }

  updateCategory(id: string, data: Partial<Category>){
    return this.http.put<Category>(`${this.apiUrl}/${id}`,data);
  }
}
