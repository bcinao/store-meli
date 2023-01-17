import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditions',
})
export class ConditionsPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'new':
        return 'Nuevo';
      case 'almost new':
        return 'Como Nuevo';
      case 'used':
        return 'Usado';
    }

    return '';
  }
}
