import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: [ './string-input.component.scss' ]
})

export class StringInputComponent {
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}