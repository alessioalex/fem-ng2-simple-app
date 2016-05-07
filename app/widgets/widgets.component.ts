import {Component} from 'angular2/core';

@Component({
  selector: 'widgets',
  templateUrl: 'app/widgets/widgets.component.html'
})
export class WidgetsComponent {
  message: string = 'Hello from widgets!';
  fontSize: string = '20px';
  options = [{ name: 'title', id: 0 }, undefined];

  increaseFontSize() {
    this.fontSize = (parseInt(this.fontSize, 10) + 1) + 'px';
  }
}
