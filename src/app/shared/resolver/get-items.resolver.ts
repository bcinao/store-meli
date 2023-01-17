import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

// Services
import { ItemsService } from '../../core/services/items.service';

@Injectable({
  providedIn: 'root',
})
export class GetItemsResolver implements Resolve<any> {
  constructor(private itemsService: ItemsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const { search = null } = route.queryParams;

    return search ? this.itemsService.search(search) : of(false);
  }
}
