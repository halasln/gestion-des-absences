import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { url } from '../../_config';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.scss']
})
export class EmployeeMenuComponent implements OnInit {

  employeeStatus = false;

  constructor(private cookieService: CookieService) {

    let formData = new FormData();
    formData.append('id', this.cookieService.get('halaLogin'));

    axios({
      method: 'post',
      url: url + 'getUserType.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        if (response.data) {

          if (response.data[0].type == 2) {
            this.employeeStatus = true;
          }else{
            this.employeeStatus = false;
            window.location.href = '/requests';
          }

        }
      })
      .catch(response => {
        console.log(response);
      });

  }

  ngOnInit(): void {
  }

  logout() {
    this.cookieService.set('halaLogin', '');
  }

}
