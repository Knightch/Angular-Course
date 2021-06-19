import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formSubmit: NgForm;

  defaultValue = "pet";
  defaultName = "Enter your name";
  defaultEmail = "Enter your mail";
  answer = "";
  genders = ['Male', 'Female'];
  user = {
    name: '',
    mail: '',
    secret: '',
    answer: '',
    gender: ''
  }
  submitDetails = false;

  //   onSubmit(form:NgForm) {
  //     console.log(form);
  //  }

  suggestUserName() {
    const suggestUserName = 'Knight';
    // this.formSubmit.setValue(
    //   {
    //     userData: {
    //       userName: suggestUserName,
    //       email:'amankumarpander2397@gmail.com'
    //     },
    //     secret: 'teacher',
    //     answer: 'Ambuj Sir',
    //     gender: 'Male'

    //   }
    // );
    this.formSubmit.form.patchValue({
      userData: {
        userName: suggestUserName
      }
    })
  }

  onSubmit() {
    this.submitDetails = true;
    this.user.name = this.formSubmit.value.userData.userName;
    this.user.mail = this.formSubmit.value.userData.email;
    this.user.secret = this.formSubmit.value.secret;
    this.user.answer = this.formSubmit.value.answer;
    this.user.gender = this.formSubmit.value.gender;
  }
}
