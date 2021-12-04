import { Pipe, PipeTransform } from '@angular/core';

export type FilterFn = ((e: any) => any) | null

@Pipe({
  name: 'arrayFilter',
  pure: false
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any[], filterFn: FilterFn): any[] {
    if (!filterFn)
      return value

    return value.filter(filterFn)
  }

}
