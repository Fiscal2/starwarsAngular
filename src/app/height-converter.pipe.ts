import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightConverter'
})
export class HeightConverterPipe implements PipeTransform {

  transform(heightInCM: number): string {
    return "null";
  }

}
