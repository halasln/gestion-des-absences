import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { url } from '../../_config';
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  menuStatus = false;

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

          if (response.data[0].type != 1) {
            window.location.href = '/employee';
          } else {
            this.menuStatus = true;
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
    window.location.reload();
  }

}
