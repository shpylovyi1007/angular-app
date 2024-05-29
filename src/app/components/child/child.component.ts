import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() childColor!: string;
  @Input() name!: string;
  @Output() nameChange = new EventEmitter<string>();
  changeName() {
    this.nameChange.emit('ім"я задане в дочірньому елементі');
  }
}
