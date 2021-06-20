import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'mail': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('Male')
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }
}
