import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RequestsComponent } from './components/requests/requests.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { EmployeeMenuComponent } from './components/employee-menu/employee-menu.component';
import { EmployeeRequestComponent } from './components/employee-request/employee-request.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AuthGuard } from './Auth';
import { FinishedRequestsComponent } from './components/finished-requests/finished-requests.component';
import { EmployeeRequestsComponent } from './components/employee-requests/employee-requests.component';
import { EditUserComponent } from './components/edit-user/edit-user.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    RequestsComponent,
    EmployeePageComponent,
    AdminPageComponent,
    AdminMenuComponent,
    EmployeeMenuComponent,
    EmployeeRequestComponent,
    LoginComponent,
    AddEmployeeComponent,
    FinishedRequestsComponent,
    EmployeeRequestsComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    CookieService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
