import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Projekte} from "../model/Projekte";
import {DialogData} from "../side-components/projects-overview/projects-overview.component";
import {Person} from "../model/Person";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  search(text:string): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/projekte/search/'+ text);
  }


  getResource(id: number): Observable<any> {

    const url: string = "http://localhost:8080/arbeitszeiten/getArbeitszeitenPerPerson/"+ id;

    return this.http.get<any>(url);

  }

  getPPKPowerpoint(): Observable<any> {

    const url: string = "http://localhost:8080/ppt/ppk";

    return this.http.get<any>(url);

  }

  getDetailPowerpoint(): Observable<any> {

    const url: string = "http://localhost:8080/ppt/detail";

    return this.http.get<any>(url);

  }
  getRoles(): Observable<any> {

    const url = "http://localhost:8080/rollen/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);
  }

  getRolesByID(id: number): Observable<any> {

    const url: string = "http://localhost:8080/rollen/getByID/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);
  }

  getProjects(): Observable<Projekte> {

    const url = "http://localhost:8080/projekte/all";

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getProjectById(id: DialogData): Observable<Projekte> {

    const url: string = "http://localhost:8080/projekte/getByID/"+ id;

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getProjectByIdNr(id: number): Observable<Projekte> {

    const url: string = "http://localhost:8080/projekte/getByID/"+ id;

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getEinsaetze(): Observable<Projekte> {

    const url: string = "http://localhost:8080/einsaetze/all";

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getProjectsByPerson(id: number): Observable<Projekte> {

    const url: string = "http://localhost:8080/projekte/getProjectsOfPerson/"+id;

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getPersonsOfProjects(id: DialogData): Observable<Projekte> {
    //console.log(id);

    const url: string = "http://localhost:8080/projekte/getPersonenOfProject/" + id;
    //console.log(url)

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getPersonsOfProjectsNumber(id: number): Observable<Projekte> {
    //console.log(id);

    const url: string = "http://localhost:8080/projekte/getPersonenOfProject/" + id;
    //console.log(url)

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getMilestonesOfProjects(id: DialogData): Observable<Projekte> {
    //console.log(id);

    const url: string = "http://localhost:8080/projekte/getMeilensteineOfProject/" + id;
    //console.log(url)

    //console.log( this.httpClient.get<any>(url));
    return this.http.get<Projekte>(url);

  }

  getAnzahlProjekt(): any {
    const url: string = "http://localhost:8080/projekte/getProjekteAnzahl";
    return this.http.get(url);

  }

  UpdateProject(id: any, updatedData: any): Observable<Projekte> {
    const headers = new HttpHeaders().append('header', 'value');
    const params = new HttpParams().append('projekt_id', id);
    return this.http.put<Projekte>("http://localhost:8080/projekte/update", updatedData, { headers, params });
  }

  getPPK(): Observable<any> {

    const url = "http://localhost:8080/ppk/all";

    return this.http.get<any>(url);

  }

  getNextPPK(): Observable<any> {

    const url = "http://localhost:8080/ppk/getNextPPK";

    return this.http.get<any>(url);

  }

  getPhasen(): Observable<any> {

    const url = "http://localhost:8080/phasen/all";

    return this.http.get<any>(url);

  }


  getMilestones(): Observable<any> {

    const url = "http://localhost:8080/meilensteine/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);
  }

  getMilestonesByID(id: number): Observable<any> {

    const url: string = "http://localhost:8080/meilensteine/getByID/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);
  }

  getMilestoneHistorie(): Observable<any> {

    const url: string = "http://localhost:8080/meilenstein_histories/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);
  }

  getHistorieByMilestones(id:any): Observable<any> {

    const url: string = "http://localhost:8080/meilenstein_histories/getHistory/"+ id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);
  }


  getEmployees(): Observable<Person> {

    const url = "http://localhost:8080/personen/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<Person>(url);

  }

  getGaestePerPPK(): Observable<any> {

    const url = "http://localhost:8080/gaeste/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);

  }

  getEmployeeById(id: number): Observable<Person> {

    const url: string = "http://localhost:8080/personen/getByID/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<Person>(url);

  }

  getResourcesByID(id: number): Observable<Person> {

    const url: string = "http://localhost:8080/ressourcen/getArbeitsaufwand/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<Person>(url);

  }

  public addEmployee(person: Person): Observable<any> {
    const headers = new Headers({ "Content-Type": "application/json" });

    const url = 'http://localhost:8080/personen/add';
    return this.http.post<Person>(url, person);
  }

  countFachkoordinator(id: Person): Observable<any> {

    const url: string = "http://localhost:8080/einsaetze/countFachkoordinator/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<Person>(url);

  }

  countProjects(id: number): Observable<Person> {

    const url: string = "http://localhost:8080/einsaetze/countProjects/" + id;

    // console.log(this.http.get<Person>(url));
    return this.http.get<Person>(url);

  }

  countProjectmanager(id: number): Observable<Person> {

    const url: string = "http://localhost:8080/einsaetze/countProjektmanager/" + id;

    // console.log(this.http.get<Person>(url));
    return this.http.get<Person>(url);

  }

  getEmployeesAndRessources():  Observable<any> {

    const url = "http://localhost:8080/personen/getPersonAndArbeitsaufwand";

    // console.log(this.http.get<any>(url));
    return this.http.get(url);

  }
  getEmployeesAndRessourcesPerProjekt(id: any):  Observable<any> {

    const url = "http://localhost:8080/personen/getPersonAndArbeitsaufwandPerProjekt/"+ id;

    // console.log(this.http.get<any>(url));
    return this.http.get(url);

  }

  getLogin(username: string, password: string):  Observable<Object> {

    const url = "http://localhost:8080/personen/login/" + username + "/" + password;

    // console.log(this.http.get<any>(url));
    return this.http.get(url);

  }
  getDepartments(): Observable<any> {

    const url = "http://localhost:8080/abteilungen/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);

  }

  getDepartmentById(id: number): Observable<any> {

    const url: string = "http://localhost:8080/abteilungen/getByID/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);

  }

  getCategorie(): Observable<any> {

    const url = "http://localhost:8080/kategorien/all";

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);

  }

  getCategorieByID(id: number): Observable<any> {

    const url: string = "http://localhost:8080/kategorien/getByID/" + id;

    //console.log(this.httpClient.get<any>(url));
    return this.http.get<any>(url);

  }
}
