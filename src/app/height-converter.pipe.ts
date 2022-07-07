import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightConverter'
})
export class HeightConverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
