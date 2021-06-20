import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null),
      'mail': new FormControl(null),
      'gender': new FormControl('Male')
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }
}
