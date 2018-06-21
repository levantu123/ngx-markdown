import { NgZone, Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs/operators';

import { MarkdownService } from './markdown.service';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {

  constructor(
    private markdownService: MarkdownService,
    private zone: NgZone,
  ) { }

  transform(value: string): string {
    if (typeof value !== 'string') {
      console.error(`MarkdownPipe has been invoked with an invalid value type [${value}]`);
      return value;
    }

    const markdown = this.markdownService.compile(value);

    this.zone.onStable
      .pipe(first())
      .subscribe(() => this.markdownService.highlight());

    return markdown;
  }
}
