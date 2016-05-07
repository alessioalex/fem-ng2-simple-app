import {Component, OnInit} from 'angular2/core';
import {StateService} from '../common/state.service';
import {WidgetsComponent} from '../widgets/widgets.component';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html',
  directives: [WidgetsComponent]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;
  copyright: string = 'Alexandru Vladutu © 2016'
  visits: number;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this._stateService.addVisit();
    this.visits = this._stateService.getVisits();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
