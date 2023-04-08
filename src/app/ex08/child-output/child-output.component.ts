import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss'],
})
export class ChildOutputComponent {
  srcInput: string = '';

  @Output() outputToParentEvent = new EventEmitter<string>();

  getInputValue() {
    this.outputToParentEvent.emit(this.srcInput);
  }
}
