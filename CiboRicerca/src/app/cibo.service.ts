import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiboService {
  private apiBase = 'https://world.openfoodfacts.org';

  constructor(private http: HttpClient) {}

  searchFood(term: string): Observable<any> {
    const url = `${this.apiBase}/cgi/search.pl?search_terms=${term}&page_size=10&json=true`;
    return this.http.get(url);
  }

  getProductDetails(id: string): Observable<any> {
    const url = `${this.apiBase}/api/v0/product/${id}.json`;
    return this.http.get(url);
  }
}
