import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';

import { url } from '../../_config';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  @Output() closeBtnClicked: EventEmitter<boolean> = new EventEmitter();
  employeeImg: any = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
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


  addEmployee(firstName: string, lastName: string, email: string, mobile: string, address: string, vDays: string, password: string, position: string) {


    let formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('address', address);
    formData.append('password', password);
    formData.append('vDays', vDays);
    formData.append('employeeImg', this.employeeImg);
    formData.append('position', position);

    axios({
      method: 'post',
      url: url + 'addEmployee.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {

        if (response.data.errorInfo === undefined) {
          console.log('undefined');
          
          this.toastr.success(`${firstName} ${lastName} has been added with id ${response.data}`, 'New Employee');

          this.closeBtnClicked.emit(false);
        } else {
          console.log('defined');
          
          if (response.data.errorInfo[1] == 1062) {
            this.toastr.error('Duplicated Email', 'Error');
          }
        }

      })
      .catch(response => {
        console.log(response);
      });

  }

}
