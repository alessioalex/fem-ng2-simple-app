import {Widget} from './widget.model';
import {ColorService} from './color.service';
import {Injectable} from 'angular2/core';

@Injectable()
export class WidgetsService {
  private _widgets: Widget[];

  constructor(private _colorService: ColorService) {
    this._widgets = [{
      id: 0,
      name: 'First widget',
      color: 'blue'
    }, {
      id: 1,
      name: '2nd widget',
      color: 'pink'
    }];
  }

  getWidgets(): Widget[] {
    return this._widgets.map((w) => {
      w.color = this._colorService.getColorCode(w.color);

      return w;
    });
  }
}
