import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  email:string;
  password:string;
  givenName:string;
  lastName:string;
  dob:Date;
  gender:string;
  address:string;
  phoneNo:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  patientRegister(){
    try {
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          given_name: this.givenName,
          last_name: this.lastName,
          dob:this.dob,
          gender:this.gender,
          address:this.address,
          phoneNo:this.phoneNo
        }
      });  
      console.log({ user });
      alert('User signup completed , please check verify your email.');
      this.router.navigate(['login']);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

}
