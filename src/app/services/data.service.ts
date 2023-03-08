import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _isloggedIn: any = false;

  get isloggedIn(): any {
    return this._isloggedIn;
  }

  set isloggedIn(value: any) {
    this._isloggedIn = value;
  }

  private _projekt_id: any = 1;
  private _ppk_id: any = 1;
  private _milestone_id: any = 1;
  private _user_id: any = 1;
  private _recht: any = 1;

  get projekt_id(): any {
    return this._projekt_id;
  }

  set projekt_id(value: any) {
    this._projekt_id = value;
  }

  get ppk_id(): any {
    return this._ppk_id;
  }

  set ppk_id(value: any) {
    this._ppk_id = value;
  }

  get milestone_id(): any {
    return this._milestone_id;
  }

  set milestone_id(value: any) {
    this._milestone_id = value;
  }

  get user_id(): any {
    return this._user_id;
  }

  set user_id(value: any) {
    this._user_id = value;
  }

  get recht(): any {
    return this._recht;
  }

  set recht(value: any) {
    this._recht = value;
  }
}
