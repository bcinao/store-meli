import { Item } from './item.interface';

export interface Results extends Response {
  categories: string[];
  items: Item[];
}
