import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;
  forbiddenUsername = ['Sujit', 'Jitu', 'Sourav', 'Raj', 'Amarjit', 'Raja'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'mail': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
}
