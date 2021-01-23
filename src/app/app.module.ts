import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RoutingComponents } from './routing/routing.module';
import { RoutingModule } from './routing/routing.module';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

Amplify.configure({
    Auth:{
      mandatorySignIn:true,
      region: 'us-east-2',
      userPoolId: 'us-east-2_PtsgTomDC',
      userPoolWebClientId: '6mrpdh7jtkrfgv0a26nr332068',
      authenticationFlowType:'USER_PASSWORD_AUTH'
    }
  });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutingComponents,
    PatientComponent,
    DoctorComponent,
    PatientRegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
