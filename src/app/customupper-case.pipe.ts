import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customupperCase'
})
export class CustomupperCasePipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase()
  }

}
