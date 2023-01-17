import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

// services
import { ItemsService } from '../../core/services/items.service';
import { Detail } from '../models/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class GetItemResolver implements Resolve<Detail> {
  constructor(private itemsService: ItemsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Detail> {
    console.log(route.params);
    const { id = null } = route.params;

    return this.itemsService.getItem(id);
  }
}
