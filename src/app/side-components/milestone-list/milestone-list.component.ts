import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {MilestoneHistorieComponent} from "../milestone-historie/milestone-historie.component";
import {HttpService} from "../../services/http.service";
import {HttpClient} from "@angular/common/http";
import {DeletedialogComponent} from "../deletedialog/deletedialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.scss']
})
export class MilestoneListComponent implements OnInit {
  milestones: any;
  projekt_id: any;
  milestone_id: any;
  historie_id: any;
  projects: any;
  milestonehistorie: any;
  boo_historie: any;
  rechte: any;
  milestonesHistorie: any

  constructor(private _router: Router, private snackBar: MatSnackBar, public dataService: DataService, public service: HttpService, public dialog: MatDialog, public http: HttpClient) {
  }

  ngOnInit(): void {
    if (!this.dataService.isloggedIn) {
      this._router.navigate(['**']);
    }

    this.rechte = this.dataService.recht;
    this.projekt_id = this.dataService.projekt_id;
    this.milestone_id = this.dataService.milestone_id;

    // GET - Meilensteine Per Projekt
    this.milestones = this.service.getMilestonesOfProjects(this.projekt_id).subscribe({
      next: value => {
        //  console.log(value)
        this.milestones = value
      }, error: err => {
        this.snackBar.open(`Daten konnten nicht geladen werden ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'snackbar-dark'
        });
      }
    });

    // GET - Projekt per ID
    this.projects = this.service.getProjectById(this.projekt_id).subscribe({
      next: value => {
        // console.log(value)
        this.projects = value
      }, error: err => {
        this.snackBar.open(`Daten konnten nicht geladen werden ${err.message}`, undefined, {
          duration: 3000,
          panelClass: 'snackbar-dark'
        });
      }
    });
  }

  // OPEN DIALOG - MEILENSTEIN HISTORIE
  openDialog(meilensteine_id: number): void {
    this.historie_id = meilensteine_id;

    this.milestonesHistorie = this.service.getHistorieByMilestones(meilensteine_id).subscribe(data => {
      if (data.length == 0) {
      } else {
        const dialogRef = this.dialog.open(MilestoneHistorieComponent, {
          width: '80',
          data: meilensteine_id
        });
        dialogRef.afterClosed().subscribe(result => {
          this.historie_id = result;
        });
      }
      this.milestonesHistorie = data
    })
  }

  // SET MilestoneID
  setNewMilestone(meilenstein_id: any) {
    //  console.log(meilenstein_id)
    this.dataService.milestone_id = meilenstein_id
    //  console.log(this.dataService.milestone_id)
  }

  // OPEN DELETE DIALOG
  openDeleteDialog(meilenstein_id: any) {
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      data: {id: meilenstein_id}
    });
    dialogRef.afterClosed().subscribe(result => {
      //  console.log('The dialog was closed');
    });
  }

}
