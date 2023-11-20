import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-int-input',
  templateUrl: './int-input.component.html',
  styleUrls: [ './int-input.component.scss']
})
export class IntInputComponent  {

  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }

}
