import {Widget} from '../common/widget.model';
import {WidgetsService, WIDGETS_SERVICE_PROVIDERS} from '../common/widgets.service';
import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'widgets',
  templateUrl: 'app/widgets/widgets.component.html',
  // https://github.com/angular/angular/issues/5622
  providers: [WIDGETS_SERVICE_PROVIDERS]
})
export class WidgetsComponent implements OnInit {
  message: string = 'Hello from widgets!';
  fontSize: string = '20px';
  options = [{ name: 'title', id: 0 }, undefined];
  widgets: Widget[];

  constructor(private _widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.widgets = this._widgetsService.getWidgets();
  }

  increaseFontSize() {
    this.fontSize = (parseInt(this.fontSize, 10) + 1) + 'px';
  }
}
