import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: [ './dropdown.component.scss']
})
export class DropdownComponent  {

  @Input() options: string[] = [];
  @Input() value: string = '';
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onChange() {
    this.valueChange.emit(this.value);
  }

}
