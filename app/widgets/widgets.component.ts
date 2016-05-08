import {Widget} from '../common/widget.model';
import {WidgetsService} from '../common/widgets.service';
import {ColorService} from '../common/color.service';
import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'widgets',
  templateUrl: 'app/widgets/widgets.component.html',
  // https://github.com/angular/angular/issues/5622
  providers: [WidgetsService, ColorService]
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
