import { Component, OnInit } from '@angular/core';
import {ProjectDetailComponent} from "../project-detail/project-detail.component";
import {DataService} from "../../services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpService} from "../../services/http.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor(private _router: Router, private snackBar: MatSnackBar, public service: HttpService, public dataService: DataService, public dialog: MatDialog) {
  }

  projects: any;
  projekt_id: any;
  user_id: any;

  ngOnInit(): void {
    if(!this.dataService.isloggedIn){
      this._router.navigate(['**']);
    }
    this.user_id = this.dataService.user_id;

    this.projects = this.service.getProjectsByPerson(this.user_id).subscribe({
      next: value => {
        //  console.log(value)
        this.projects = value
      }, error: err => {
        this.snackBar.open(`Daten konnten nicht geladen werden ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'snackbar-dark'
        });
      }
    });
  }

  openDialog(projekt_id: number): void {
    this.projekt_id = projekt_id;
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      width: '70%',
      data: projekt_id,
    });

    dialogRef.afterClosed().subscribe(result => {
      //  console.log('The dialog was closed');
      this.projekt_id = result;
    });
  }

}
