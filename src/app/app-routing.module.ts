import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeFormComponent} from "./forms/add-employee-form/add-employee-form.component";
import {AddMilestoneFormComponent} from "./forms/add-milestone-form/add-milestone-form.component";
import {BeschlussFolieFormComponent} from "./forms/beschluss-folie-form/beschluss-folie-form.component";
import {ChangeMilestoneFormComponent} from "./forms/change-milestone-form/change-milestone-form.component";
import {ChangeProjectFormComponent} from "./forms/change-project-form/change-project-form.component";
import {CreateEmployeeFormComponent} from "./forms/create-employee-form/create-employee-form.component";
import {CreatePPKFormComponent} from "./forms/create-ppk-form/create-ppkform.component";
import {CreateProjectFormComponent} from "./forms/create-project-form/create-project-form.component";
import {DetailPresentationFormComponent} from "./forms/detail-presentation-form/detail-presentation-form.component";
import {EmployeeListComponent} from "./side-components/employee-list/employee-list.component";
import {FooterComponent} from "./side-components/footer/footer.component";
import {FreieFolieFormComponent} from "./forms/freie-folie-form/freie-folie-form.component";
import {InfoPpkComponent} from "./side-components/info-ppk/info-ppk.component";
import {MilestoneHistorieComponent} from "./side-components/milestone-historie/milestone-historie.component";
import {MilestoneListComponent} from "./side-components/milestone-list/milestone-list.component";
import {NavbarComponent} from "./side-components/navbar/navbar.component";
import {PPMenuComponent} from "./side-components/pp-menu/pp-menu.component";
import {PPKPresentationFormComponent} from "./forms/ppkpresentation-form/ppkpresentation-form.component";
import {ProjectDetailComponent} from "./side-components/project-detail/project-detail.component";
import {ProjectsOverviewComponent} from "./side-components/projects-overview/projects-overview.component";
import {SoftwareRequestsFormComponent} from "./forms/software-requests-form/software-requests-form.component";
import {StartMenuComponent} from "./side-components/start-menu/start-menu.component";
import {UserProfileComponent} from "./side-components/user-profile/user-profile.component";
import {MyProjectsComponent} from "./side-components/my-projects/my-projects.component";
import {ResourceFormComponent} from "./forms/resource-form/resource-form.component";
import {EmployeeMenuComponent} from "./side-components/employee-menu/employee-menu.component";
import {PpkInformationComponent} from "./side-components/ppk-information/ppk-information.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./side-components/page-not-found/page-not-found.component";
import {EmNavComponent} from "./side-components/em-nav/em-nav.component";
import {ResourcenOverviewComponent} from "./side-components/resourcen-overview/resourcen-overview.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  { path: 'add-employee', component: AddEmployeeFormComponent, canActivate: [AuthGuardService] },
  { path: 'add-milestone', component: AddMilestoneFormComponent, canActivate: [AuthGuardService] },
  { path: 'beschluss_folie', component: BeschlussFolieFormComponent, canActivate: [AuthGuardService] },
  { path: 'change_milestone', component: ChangeMilestoneFormComponent, canActivate: [AuthGuardService] },
  { path: 'change_project', component: ChangeProjectFormComponent, canActivate: [AuthGuardService] },
  { path: 'create_employee', component: CreateEmployeeFormComponent, canActivate: [AuthGuardService] },
  { path: 'create_ppk', component: CreatePPKFormComponent, canActivate: [AuthGuardService] },
  { path: 'create_project', component: CreateProjectFormComponent, canActivate: [AuthGuardService] },
  { path: 'detail_presentation', component: DetailPresentationFormComponent, canActivate: [AuthGuardService] },
  { path: 'employee_list', component: EmployeeListComponent, canActivate: [AuthGuardService] },
  { path: 'footer', component: FooterComponent },
  { path: 'freie_folie', component: FreieFolieFormComponent, canActivate: [AuthGuardService] },
  { path: 'info_ppk', component: InfoPpkComponent },
  { path: 'milestone_historie', component: MilestoneHistorieComponent, canActivate: [AuthGuardService] },
  { path: 'milestone_list', component: MilestoneListComponent, canActivate: [AuthGuardService] },
  { path: 'navbar', component: NavbarComponent },
  { path: 'pp_menu', component: PPMenuComponent },
  { path: 'ppk_presentation', component: PPKPresentationFormComponent, canActivate: [AuthGuardService] },
  { path: 'project_detail', component: ProjectDetailComponent, canActivate: [AuthGuardService] },
  { path: 'project_overview', component: ProjectsOverviewComponent, canActivate: [AuthGuardService] },
  { path: 'software_requests', component: SoftwareRequestsFormComponent, canActivate: [AuthGuardService] },
  { path: 'start_menu', component: StartMenuComponent, canActivate: [AuthGuardService] },
  { path: 'user_profil', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'my_projects', component: MyProjectsComponent, canActivate: [AuthGuardService] },
  { path: 'resourcen', component: ResourceFormComponent, canActivate: [AuthGuardService] },
  { path: 'resourcen_overview', component: ResourcenOverviewComponent, canActivate: [AuthGuardService] },
  { path: 'menu', component: EmployeeMenuComponent, canActivate: [AuthGuardService] },
  { path: 'ppk_info', component: PpkInformationComponent , canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'em-nav', component: EmNavComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }