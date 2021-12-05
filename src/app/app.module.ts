import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './home/components/intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './home/components/main/main.component';
import { TrialComponent } from './home/components/trial/trial.component';
import { LicenseComponent } from './home/components/license/license.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    FooterComponent,
    MainComponent,
    TrialComponent,
    LicenseComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    SupportComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatIconModule,
    AppRoutingModule,
    SharedModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
