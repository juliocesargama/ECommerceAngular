import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ErrorControlComponent } from './error-control/error-control.component'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  declarations: [
    ProfileComponent,
    ErrorControlComponent
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
