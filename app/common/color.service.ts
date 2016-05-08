import {Injectable} from 'angular2/core';

@Injectable()
export class ColorService {
  private _codeMap = {
    pink: '#FE2EF7',
    red: '#FF0000',
    blue: '#0000FF'
  };

  getColorCode(color: string): string {
    return this._codeMap[color];
  }
}
