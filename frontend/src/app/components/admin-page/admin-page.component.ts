import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { url } from '../../_config';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  addEmployeeModel: boolean = false;
  adminStatus = false;

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

          if (response.data[0].type == 1) {
            this.adminStatus = true;
          }else{
            this.adminStatus = false;
            window.location.href = '/employee';
          }

        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  ngOnInit(): void {
    
  }

}
