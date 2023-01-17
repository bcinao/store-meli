import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Results } from '../../shared/models/results.interface';
import { Detail } from '../../shared/models/detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  search(search: string): Observable<Results> {
    return this.http.get<Results>(`${environment.urlApi}/api/items`, {
      params: { q: search },
    });
  }

  getItem(id: string): Observable<Detail> {
    return this.http.get<Detail>(`${environment.urlApi}/api/items/${id}`);
  }
}
