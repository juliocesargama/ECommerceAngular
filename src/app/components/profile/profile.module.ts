import { ZipcodeService } from './zipcode/zipcode.service';
import { DropdownService } from './dropdown/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from './profile.component';
import { NgxMaskModule } from 'ngx-mask';
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
  providers: [DropdownService, ZipcodeService]
})
export class ProfileModule { }
