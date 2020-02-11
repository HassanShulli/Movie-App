import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() index: number;
  @Input() total: number;
  @Input() limit: number;
  @Input() pagesToShow: number;

  @Output() prevPage = new EventEmitter<boolean>();
  @Output() nextPage = new EventEmitter<boolean>();
  @Output() pageSelect = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onPrevClick() {
    const hasPrev: boolean = this.index > 0;
    this.prevPage.emit(hasPrev);
  }

  onNextClick() {
    const numOfPages = Math.ceil(this.total / this.limit);
    const hasNext: boolean = this.index < numOfPages;
    this.nextPage.emit(hasNext);
  }

  onPageClick(index: number) {
    this.pageSelect.emit(index);
  }

  isLastPage(): boolean {
    return this.index >= Math.ceil(this.total / this.limit) - 1;
  }

  getPages(): number[] {
    const numOfPages = Math.ceil(this.total / this.limit) - 1;
    const numOfPagesToShow = this.pagesToShow || 5;
    const currentPage = this.index || 0;
    const pages: number[] = [];

    pages.push(currentPage);

    for (let i = 0; i < numOfPagesToShow - 1; i++) {
      if (pages.length < numOfPagesToShow) {
        if (Math.min.apply(null, pages) > 0) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < numOfPagesToShow) {
        if (Math.max.apply(null, pages) < numOfPages) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }

    pages.sort((a, b) => {
      return a - b
    });

    return pages;
  }

}
