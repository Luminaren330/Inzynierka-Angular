import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: [ './filter.component.scss'
  ]
})
export class FilterComponent  {
  @Input() categoryList: string[] = [];
  @Input() filterCategory: string = '';
  @Output() filterCategoryChange = new EventEmitter<string>();

  onFilterChange() {
    this.filterCategoryChange.emit(this.filterCategory);
  }

}
