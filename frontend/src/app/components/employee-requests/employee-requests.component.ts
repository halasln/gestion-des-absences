import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';

import { url } from './../../_config';

@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.component.html',
  styleUrls: ['./employee-requests.component.scss']
})
export class EmployeeRequestsComponent implements OnInit {

  requests: any;
  employeeId: string = this.cookieService.get('halaLogin');

  constructor(private cookieService: CookieService) {
    this.loadRequests();
    console.log(this.employeeId);
  }


  ngOnInit(): void {
  }

  diffDates(firstDate: any, secondDate: any) {
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);

    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }

  loadRequests() {

    let self = this;

    let formData = new FormData();
    formData.append('employeeId', this.employeeId);

    axios({
      method: 'post',
      url: url + 'getEmployeeRequests.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        self.requests = response.data;

      })
      .catch(response => {
        console.log(response);
      });
  }

  requestAction(requestId: any, status: number) {
    let requestStatus = 0;

    if (status == 1)
      requestStatus = 1;

    else
      requestStatus = 2;

    let formData = new FormData();
    formData.append('id', requestId);
    formData.append('requestStatus', requestStatus.toString());

    axios({
      method: 'post',
      url: url + 'requestAction.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        console.log(response.data);
        this.loadRequests();


      })
      .catch(response => {
        console.log(response);
      });

  }

}
