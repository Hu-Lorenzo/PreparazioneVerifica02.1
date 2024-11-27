import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiboService {
  private apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl';

  constructor(private http: HttpClient) {}

  searchFood(searchTerm: string, pageSize: number = 10): Observable<any> {
    const url = `${this.apiUrl}?search_terms=${searchTerm}&page_size=${pageSize}&json=true`;
    return this.http.get<any>(url);
  }
}
