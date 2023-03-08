import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pp-menu',
  templateUrl: './pp-menu.component.html',
  styleUrls: ['./pp-menu.component.scss']
})
export class PPMenuComponent implements OnInit {

  constructor(public data: DataService, public router: Router) {
  }
  rechte: any;
  isLoggedIn: any;
  disableButton: boolean = true

  ngOnInit(): void {
    if(!this.data.isloggedIn){
      this.router.navigate(['**']);
    }

    this.rechte = this.data.recht;
    this.isLoggedIn = this.data.isloggedIn

    if (this.rechte == 1) {
      this.disableButton = false
    }


  }
}
