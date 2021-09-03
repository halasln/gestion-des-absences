import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { url } from './../../_config';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  requests: any;

  addEmployeeModel: boolean = false;
  status = false;

  constructor() {
    this.loadRequests();
  }

  ngOnInit(): void {
  }

  showEmployeeForm(){
    this.addEmployeeModel = true;
  }

  closeAddEmployee(){
    this.addEmployeeModel = false;
  }

  diffDates(firstDate: any, secondDate: any) {
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);

    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }

  loadRequests() {

    let self = this;

    axios({
      method: 'post',
      url: url + 'getEmployees.php',
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
