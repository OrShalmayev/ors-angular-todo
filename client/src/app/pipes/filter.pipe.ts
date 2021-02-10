import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   *Transform
   *@param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   *
   */

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((item) => {
      return item.content.toLowerCase().includes(searchText);
    });
  }
}
