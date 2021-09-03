import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { url } from '../../_config';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Output() closeBtnClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelBtnClicked: EventEmitter<boolean> = new EventEmitter();
  employeeImg: any = '';

  constructor(private toastr: ToastrService, private cookieService: CookieService) {
    this.loadData()


  }

  email: string = '';
  mobile: string = '';
  password: string = '';
  rdays: any;

  ngOnInit(): void {

    this.cookieService.get('halaLogin');
  }

  loadData() {
    let self = this;

    let userId = this.cookieService.get('halaLogin');

    let formData = new FormData();
    formData.append('userId', userId);

    axios({
      method: 'post',
      url: url + 'getUserWithId.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        console.log(response.data);

        this.email = response.data[0].email;
        this.mobile = response.data[0].mobile;
        this.password = response.data[0].password;
        this.employeeImg = response.data[0].image;
        this.rdays = response.data[0].r_days;

      })
      .catch(response => {
        console.log(response);
      });

  }

  closeModel() {
    this.closeBtnClicked.emit(false);
  }

  showImg(e: any) {
    var file = e.target.files[0];
    var reader = new FileReader();
    let self = this;
    // it's onload event and you forgot (parameters)
    reader.onload = function (e) {
      self.employeeImg = e.target?.result;
    }
    // you have to declare the file loading
    reader.readAsDataURL(file);
  }

  editUser(employeeImage: any) {

    console.log(this.employeeImg);

    if (employeeImage.files[0] === undefined) {

      let formData = new FormData();
      formData.append('userId', this.cookieService.get('halaLogin'));
      formData.append('email', this.email);
      formData.append('mobile', this.mobile);
      formData.append('password', this.password);
      axios({
        method: 'post',
        url: url + 'editUser.php',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(response => {
          console.log(response.data);
          
          this.toastr.success(` has been added with id ${response.data}`, 'New Employee');

          this.closeBtnClicked.emit(false);

        })
        .catch(response => {
          console.log(response);
        });
    } else {
      
      var file = employeeImage.files[0];
      var reader = new FileReader();
      let self = this;
      // it's onload event and you forgot (parameters)
      reader.onload = function (e) {
        self.employeeImg = e.target?.result;
        let formData = new FormData();
        formData.append('userId', self.cookieService.get('halaLogin'));
        formData.append('email', self.email);
        formData.append('mobile', self.mobile);
        formData.append('password', self.password);
        formData.append('employeeImg', self.employeeImg);
        axios({
          method: 'post',
          url: url + 'editUser.php',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' }
        })
          .then(response => {
            console.log(response.data);
            self.toastr.success(` has been added with id ${response.data}`, 'New Employee');

            self.closeBtnClicked.emit(false);

          })
          .catch(response => {
            console.log(response);
          });
      }
      // you have to declare the file loading
      reader.readAsDataURL(file);



    }






  }

}
