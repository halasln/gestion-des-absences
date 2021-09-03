import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { url } from '../../_config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginBtnClicked: EventEmitter<string> = new EventEmitter();

  constructor(private toastr: ToastrService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    axios({
      method: 'post',
      url: url + 'getUser.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        if (response.data) {

          let data = response.data[0];          

          if (data['type'] == 1) {
            this.loginBtnClicked.emit('1');
            window.location.href = '/requests';
          }

          else if (data['type'] == 2){
            this.loginBtnClicked.emit('2');
            window.location.href = '/employee';
          }

          this.cookieService.set('halaLogin', data['id'], 14);


        } else {

          this.toastr.error(`Wrong Email/Password`, 'Login Error');

        }
      })
      .catch(response => {
        console.log(response);
      });

  }

}
