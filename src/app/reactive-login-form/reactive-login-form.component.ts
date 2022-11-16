import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray} from '@angular/forms';
import { passwordValidator } from './shared/passwordValifators';
import { nameValidator } from './shared/validator';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {

  loginForm!: FormGroup

  get email()
  {
    return this.loginForm.get('email')
  }

  get alternateEmails(){
    return this.loginForm.get('alternateEmails') as FormArray
  }

  addalternateEmail()
  {
     this.alternateEmails.push(this.fb.control(''))
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.minLength(5)]],
      userName: ['',[Validators.required,Validators.minLength(5),nameValidator]],
      address: this.fb.group({
        city: [''],
        state: [''],
        postal: ['']
      }),
      password: [''],
      cnpassword: [''],
      alternateEmails:this.fb.array([

      ])
    },{validator:passwordValidator})
  }

  submit()
  {
    console.log(this.loginForm.value)
  }

  loadAPI(){
    this.loginForm.patchValue(
      {
        email: "shadab@gmail.com",
        userName: "shadab",
        address: {
          city: "jaipur",
          state: "Rajaasthsn",
          postal: "370001"
        },
        password: "123",
        cnpassword: "123"
      }
    )
  }

}


