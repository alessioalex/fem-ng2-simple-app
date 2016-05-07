import {Injectable} from 'angular2/core';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
  private _visits:number = 0;

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

  addVisit(): void {
    this._visits++;
  };

  getVisits(): number {
    return this._visits;
  };
}
