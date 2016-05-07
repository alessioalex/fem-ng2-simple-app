import {Component} from 'angular2/core';

@Component({
  selector: 'demo',
  templateUrl: './app/demo/demo.component.html',
  styles: [`
    button {
      background-color: red;
      border: none;
      outline: none;
      padding: 10px;
      color: white;
      min-width: 80px;
      height: 50px;
    }

    button:disabled {
      background-color: pink;
      cursor: not-allowed;
    }
  `]
})
export class DemoComponent {
  message: string = 'Hello';
  isDisabled: boolean = false;
  nums: Array<String> = ['one', 'two', 'three'];
  elvis = { name: 'alex' };

  handleClick() {
    this.isDisabled = !this.isDisabled;
  }
}
