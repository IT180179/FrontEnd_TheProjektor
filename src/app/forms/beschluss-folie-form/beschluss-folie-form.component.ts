import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../side-components/projects-overview/projects-overview.component';
import { DataService } from '../../services/data.service';
import { SummaryComponent } from '../../side-components/summary/summary.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-beschluss-folie-form',
  templateUrl: './beschluss-folie-form.component.html',
  styleUrls: ['./beschluss-folie-form.component.scss']
})
export class BeschlussFolieFormComponent implements OnInit {
  ppk_id: any;
  data: any;
  newdata: any;

  addressForm = this.fb.group({
    freitext: [null, Validators.compose([Validators.maxLength(1046), Validators.required])],
    titel: [null, Validators.compose([Validators.maxLength(1046), Validators.required])],
    entscheidung: [null]
  });

  constructor(
    private router: Router,
    private _router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dataService: DataService,
    private http: HttpClient,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public id: DialogData
  ) {}

  ngOnInit(): void {
    // Überprüfen ob User eingeloggt ist
    if (!this.data.isloggedIn) {
      this.router.navigate(['**']);
    }
    this.ppk_id = this.dataService.ppk_id;
  }

  onSubmit(data: any) {
    if (data.entscheidung) {
      data.entscheidung = 1;
    } else {
      data.entscheidung = 0;
    }

    // JSON-Objekt für POST
    this.newdata = {
      titel: data.titel,
      freitext: data.freitext,
      entscheidung: data.entscheidung,
      upload: null,
      ppk_projekte_id: {
        ppk_projekte_id: {
          ppk_id: {
            ppk_id: 1
          },
          projekte_id: {
            projekt_id: Number(this.id)
          }
        }
      }
    };

    // POST-Beschlussfolie
    /*this.http.post('http://localhost:8080/beschlussfolien/add', this.newdata)
      .subscribe({
        next: value => {
          console.log(value);
          this.snackBar.open(`Beschlussfolie wurde gespeichert`, undefined, {
            duration: 3000,
            panelClass: 'snackbar-dark'
          });
        }, error: err => {
          this.snackBar.open(`Daten konnten nicht geladen werden ${err.message}`, undefined, {
            duration: 3000,
            panelClass: 'snackbar-dark'
          });
        }
      });*/

    this.openSummary();
    this.closeDialog();
  }

  openSummary() {
    const dialogRef = this.dialog.open(SummaryComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  closeDialog() {
    this.dialogRef.close({ data: this.newdata });
  }
}
