import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

  constructor(private dataService:DataService, private router:Router) {}

  canActivate():boolean{
    if( this.dataService.role=='admin' ){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
