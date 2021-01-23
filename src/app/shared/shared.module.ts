import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';

const sharedComponents = [ HeaderComponent, FooterComponent ];

const sharedModules = [ MaterialModule ];

@NgModule({
  declarations: [ ...sharedComponents ],
  imports: [
    CommonModule
  ],
  exports: [ ...sharedComponents, ...sharedModules ]
})
export class SharedModule { }
