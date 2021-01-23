import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorRegistrationComponent } from '../doctor/doctor-registration/doctor-registration.component';
import { PatientRegistrationComponent } from '../patient/patient-registration/patient-registration.component';
import { RegisterComponent } from '../login/register/register.component';
import { LoginComponent } from '../login/login.Component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'doctorRegistration', component: DoctorRegistrationComponent },
  { path: 'patientRegistration', component: PatientRegistrationComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

export const RoutingComponents = [LoginComponent, RegisterComponent, DoctorRegistrationComponent, PatientRegistrationComponent];
