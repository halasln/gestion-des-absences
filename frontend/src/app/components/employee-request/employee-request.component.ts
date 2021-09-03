import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { url } from '../../_config';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.scss']
})
export class EmployeeRequestComponent implements OnInit {

  employeeId: string = this.cookieService.get('halaLogin');

  constructor(private toastr: ToastrService, private cookieService: CookieService) {
    console.log(this.employeeId);
  }

  ngOnInit(): void {


  }

  onClick(message: string, fromDate: string, toDate: string) {

    let formData = new FormData();
    formData.append('employeeId', this.employeeId);
    formData.append('message', message);
    formData.append('fromDate', fromDate);
    formData.append('toDate', toDate);


    if (message == '' || fromDate == '' || toDate == '') {
      this.toastr.error(`Please fill all fields`, 'Error');
    } else {
      axios({
        method: 'post',
        url: url + 'addRequest.php',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(response => {

          this.toastr.success(`Your request with id ${response.data} has successfuly submited to admin`, 'Request submitted');


        })
        .catch(response => {
          console.log(response);
        });
    }




  }

}
