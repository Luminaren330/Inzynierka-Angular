import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-format-input',
  templateUrl: './format-input.component.html',
  styleUrls: [ './format-input.component.scss' ]
})
export class FormatInputComponent {
  @Input() label: string = '';
  @Input() format: string = '';
  @Input() pattern: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}