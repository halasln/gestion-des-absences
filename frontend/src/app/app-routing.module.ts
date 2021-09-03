import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  UserComponent,
  AdminPageComponent,
  LoginComponent,
  RequestsComponent,
  FinishedRequestsComponent,
  EmployeeComponent,
  EmployeePageComponent,
  EmployeeRequestComponent,
  EmployeeRequestsComponent

} from './components';
import { AuthGuard } from './Auth';

const routes: Routes = [
  
  {
    path: '', component: AdminPageComponent, canActivate: [AuthGuard],
    children: [
      { path: 'requests', component: RequestsComponent, canActivateChild: [AuthGuard] },
      { path: 'finished-requests', component: FinishedRequestsComponent, canActivateChild: [AuthGuard] },
      { path: 'employees', component: EmployeeComponent, canActivateChild: [AuthGuard] }
    ]
  },
  {
    path: '', component: EmployeePageComponent, canActivate: [AuthGuard],
    children: [
      { path: 'employee', component: EmployeeRequestComponent, canActivateChild: [AuthGuard] },
      { path: 'p-requests', component: EmployeeRequestsComponent, canActivateChild: [AuthGuard] }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
