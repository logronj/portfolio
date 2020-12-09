import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { EducationComponent } from './education/education.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

const routers: Routes = [
  {path:'',component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileModule,
    RouterModule.forRoot(routers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
