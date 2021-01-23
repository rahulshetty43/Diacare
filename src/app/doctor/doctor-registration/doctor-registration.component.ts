import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

    email:string;
    password:string;
    givenName:string;
    lastName:string;
    dob:Date;
    gender:string;
    address:string;
    qualification:string;
    aboutMe:string;
    phoneNo:number;
    
    
    constructor(private router:Router) { }
    ngOnInit(): void {
    }

    doctorRegister(){
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
            qualification:this.qualification,
            aboutMe:this.aboutMe,
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
