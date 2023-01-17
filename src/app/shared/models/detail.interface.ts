import { Item } from './item.interface';

export interface Detail extends Response {
  categories: string[];
  item: Item;
}
