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
    console.log(this.formSubmit);
  }
}
