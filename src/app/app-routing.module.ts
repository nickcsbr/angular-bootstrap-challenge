import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { CasesComponent } from './cases/cases.component';
import { WhiteComponent } from './white/white.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'white', component: WhiteComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
