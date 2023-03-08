import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SummaryComponent} from "../../side-components/summary/summary.component";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../services/data.service";
import {HttpService} from "../../services/http.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PPKPresentationFormComponent} from "../ppkpresentation-form/ppkpresentation-form.component";

@Component({
  selector: 'app-software-requests-form',
  templateUrl: './software-requests-form.component.html',
  styleUrls: ['./software-requests-form.component.scss']
})
export class SoftwareRequestsFormComponent implements OnInit {
  addressForm = this.fb.group({
    phasen_id: [null],
    status: [null, Validators.compose([Validators.maxLength(295), Validators.required])],
    beschreibung: [null, Validators.compose([Validators.maxLength(295), Validators.required])]
  });
  private auswahl: any
  selectedValue: any
  phasen: any
  newdata: any

  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<any>, public dataService: DataService, public service: HttpService, private _router: Router, public dialog: MatDialog, private http: HttpClient, private fb: FormBuilder,private ppk:PPKPresentationFormComponent) {
  }
  ngOnInit() {
    if(!this.dataService.isloggedIn){
      this._router.navigate(['**']);
    }
    this.phasen = this.service.getPhasen().subscribe({
      next: value => {
        console.log(value)
        this.phasen = value
      }, error: err => {}
    });
  }
  getCheckboxValue() {
    this.auswahl = [];
    for (let i = 0; i <= 7; i++) {
      const checkbox = document.getElementById("checkbox" + i) as HTMLInputElement | null;
      if (checkbox?.checked) {
        console.log('Checkbox is checked');
        this.auswahl.push(1);
        console.log(1)
      } else {
        console.log('Checkbox is NOT checked');
        this.auswahl.push(0);
      }
      console.log(checkbox?.checked);
    }
    console.log(this.auswahl)
  }
  onSubmit(value: any) {
    this.getCheckboxValue()
    this.newdata = {
      status: Number(value.phasen_id),
      beschreibung: value.beschreibung,
      anforderungsprozess: value.status,
      projekte_id: {
        projekt_id: this.dataService.projekt_id
      },
      auswahl: this.auswahl
    }
    console.log(this.newdata)
    console.log(this.auswahl[1] + '/' + this.auswahl[3] + '/' + this.auswahl[3] + '/' +
      this.auswahl[4] + '/' + this.auswahl[5] + '/' + this.auswahl[6] + '/' + this.auswahl[7])

    /*this.http.post('http://localhost:8080/softwareanforderungen/add/' + this.auswahl[1] + '/' + this.auswahl[3] + '/' + this.auswahl[3] + '/' + this.auswahl[4] + '/' + this.auswahl[5] + '/' + this.auswahl[6] + '/' + this.auswahl[7], this.newdata)
      .subscribe({
        next: value => {
          console.log(value)
          this.snackBar.open(`Daten wurden gespeichert!`, undefined, {
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
    this.openSummary()
    this.closeDialog()
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
    this.dialogRef.close({data:this.newdata});
  }
}
