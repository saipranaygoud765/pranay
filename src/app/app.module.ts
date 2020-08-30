import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MatFormFieldModule, MatInputModule,  MatDatepickerModule, MatNativeDateModule,MatMenuModule,MatPaginatorModule } from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {Ng2TelInputModule} from 'ng2-tel-input';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';

import { RouterModuleClass } from './app-routes.module';

import { VerifyComponent } from './verify/verify.component';
import { NgOtpInputModule } from  'ng-otp-input';


import { HttpClientModule } from '@angular/common/http';




import { RegComponent } from './reg/reg.component';
import { NanduComponent } from './nandu/nandu.component';
import { LuckyComponent } from './lucky/lucky.component';
import { MaggiComponent } from './maggi/maggi.component';
import { TejuComponent } from './teju/teju.component';





@NgModule({
  declarations: [
    AppComponent, VerifyComponent,RegComponent,NanduComponent,LuckyComponent,
    MaggiComponent,TejuComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatDialogModule, Ng2TelInputModule,
     MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModuleClass,
     NgOtpInputModule, MatDatepickerModule, HttpClientModule, MatNativeDateModule, MatMomentDateModule,
     MatMenuModule,MatTableModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegComponent]
})
export class AppModule { }
