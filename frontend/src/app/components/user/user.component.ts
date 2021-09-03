import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';

import { url } from './../../_config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  editUser: boolean = false;

  constructor(private cookieService: CookieService) {
    this.getUserData();
  }

  userName: any;
  userPosition: any;
  userImg: any;

  ngOnInit(): void {
  }

  getUserData() {

    let self = this;

    let formData = new FormData();
    formData.append('id', this.cookieService.get('halaLogin'));

    axios({
      method: 'post',
      url: url + 'getUserType.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        let data = response.data[0];

        self.userName = data['first_name'] + " " + data['last_name'];
        self.userPosition = data['position'];
        self.userImg = data['image'];

      })
      .catch(response => {
        console.log(response);
      });
  }

  showEditUser() {
    this.editUser = true;
  }

  closeEditUser() {
    this.editUser = false;
  }

}