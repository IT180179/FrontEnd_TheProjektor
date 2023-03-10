import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SummaryComponent} from "../../side-components/summary/summary.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpService} from "../../services/http.service";
import {DatePipe} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-detail-presentation-form',
  templateUrl: './detail-presentation-form.component.html',
  styleUrls: ['./detail-presentation-form.component.scss']
})
export class DetailPresentationFormComponent implements OnInit {

  addressForm = this.fb.group({
    project: [null, Validators.required]
  });

  constructor(private data: DataService, private router: Router, public datePipe: DatePipe, private authService: AuthService, private snackBar: MatSnackBar, private _router: Router, public dialog: MatDialog, private fb: FormBuilder, public service: HttpService) {
  }

  employees: any;
  roles: any;
  projects: any;
  selected = '1';

  ngOnInit(): void {
    if(!this.data.isloggedIn){
      this.router.navigate(['**']);
    }
    this.employees = this.service.getEmployees().subscribe({
      next: value => {
        // console.log(value)
        this.employees = value
      }, error: err => {}
    });
    this.roles = this.service.getRoles().subscribe({
      next: value => {
        // console.log(value)
        this.roles = value
      }, error: err => {}
    });
    this.projects = this.service.getProjects().subscribe({
      next: value => {
        // console.log(value)
        this.projects = value
      }, error: err => {}
    });
  }

  onSubmit() {
    this.openSummary()
  }
  openSummary() {
    const dialogRef = this.dialog.open(SummaryComponent, {
      width: '400px',
      height: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this._router.navigate(['/project_overview']);
    });
  }

  getDetailPresentation(){
    console.log("Detail-Pr??sentation wird generiert")
    //this.http.getPPKPowerpoint().subscribe(
    //       {
    //         next: value => {
    //           //  console.log(value)
    //           this.ppkInfos = value
    //         }, error: err => {}
    //         });
  }
}
