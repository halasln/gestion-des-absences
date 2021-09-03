import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { url } from './../../_config';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests: any;

  constructor() {
    this.loadRequests();
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

    axios({
      method: 'post',
      url: url + 'getRequests.php',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        console.log(response.data);
        self.requests = response.data;

      })
      .catch(response => {
        console.log(response);
      });
  }

  requestAction(userId: any, requestId: any, status: number, from_date: any, to_date: any, days: any) {
    let requestStatus = 0;    

    let vDays = this.diffDates(from_date, to_date);
    let rDays = days;

    if (status == 1){
      requestStatus = 1;
      rDays = days-vDays;
      console.log(rDays.toString());
      
    }else{
      requestStatus = 2;
    }

    let formData = new FormData();
    formData.append('userId', userId);
    formData.append('requestId', requestId);
    formData.append('requestStatus', requestStatus.toString());
    formData.append('rDays', rDays.toString());

    axios({
      method: 'post',
      url: url + 'requestAction.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        console.log(response.data);
        window.location.reload();


      })
      .catch(response => {
        console.log(response);
      });

  }

}
