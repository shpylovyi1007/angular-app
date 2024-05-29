import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
  standalone: true,
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: string | null | undefined): string | null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw new Error(value);
    }

    return value.replace(
      /\w\S*/g,
      (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase()
    );
  }
}

@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: string | null | undefined): string | null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw new Error(value);
    }
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'lowercase',
  standalone: true,
})
export class LowerCasePipe implements PipeTransform {
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: string | null | undefined): string | null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw new Error(value);
    }
    return value.toLowerCase();
  }
}

@Pipe({
  name: 'json',
  pure: false,
  standalone: true,
})
export class JsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}

@Pipe({
  name: 'sort',
  pure: false,
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(arr: any[], property: string): any[] {
    arr.sort((a: any, b: any) => {
      if (a[property] > b[property]) return 1;
      if (a[property] < b[property]) return -1;
      return 0;
    });
    return arr;
  }
}
