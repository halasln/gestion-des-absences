import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';

import { url } from './_config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-des-absences';

  constructor(private cookieService: CookieService) {

    this.checkLogin();

  }

  checkLogin() {

    if (this.cookieService.get('halaLogin')) {

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

            let data = response.data[0];

            if (data['type'] == 1) {

              this.adminCompStatus = true;
              this.loginCompStatus = false;

            }else if (data['type'] == 2) {

              this.employeeCompStatus = true;
              this.loginCompStatus = false;

            }

          } else {

            this.loginCompStatus = true;

          }
        })
        .catch(response => {
          console.log(response);
        });

    } else {
      this.loginCompStatus = true;
    }
  }

  adminCompStatus = false;
  employeeCompStatus = false;
  loginCompStatus = false;

  loginBtnClicked(event: any) {

    if (event == 1) {
      this.adminCompStatus = true;
      this.loginCompStatus = false;
    } else {
      this.employeeCompStatus = true;
      this.loginCompStatus = false;
    }

  }

}
