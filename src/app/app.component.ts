import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '../my-pipe';
import { UpperCasePipe } from '../my-pipe';
import { LowerCasePipe } from '../my-pipe';
import { JsonPipe } from '../my-pipe';
import { SortPipe } from '../my-pipe';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    LowerCasePipe,
    UpperCasePipe,
    JsonPipe,
    SortPipe,
    ChildComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular app';
  linkTitle = 'Підказка для посилання';

  inlineStyle = {
    width: '100px',
    height: '20px',
    background: 'darkblue',
  };

  arrUsers = [{ age: 16 }, { age: 20 }, { age: 23 }];
  constructor() {
    setTimeout(() => {
      this.arrUsers.push({ age: 21 });
    }, 3000);
  }
  color = 'green';
  parentName: string = 'hello world';
  changeColor(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;

    console.log(target.value);
  }
  setNewName(newName: string) {
    this.parentName = newName;
  }
}
