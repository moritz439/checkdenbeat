import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list'
})
export class ListPipe implements PipeTransform {

  transform(stringList: string[], ...args: unknown[]): unknown {
    return stringList.join(', ');
  }

}
