import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightConverter'
})
export class HeightConverterPipe implements PipeTransform {

  transform(heightInCM: number): string {
    const totalInches = Math.round(heightInCM / 2.54);
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12

    return "null";
  }

}
