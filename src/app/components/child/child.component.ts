import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // @Input() childColor!: string;
  // @Input() name!: string;
  // @Output() nameChange = new EventEmitter<string>();
  // changeName() {
  //   this.nameChange.emit('ім"я задане в дочірньому елементі');
  // }
  @Input() title!: string;
  @Input() name!: string;
  text: string = 'some text';
  constructor() {
    console.log('%cChild component completed', 'background: darkblue');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cngOnchanges active', 'color: aqua');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('%cngOnInit active', 'color: darkred');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
