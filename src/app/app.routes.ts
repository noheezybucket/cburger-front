import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomePageComponent} from "./customer/home-page/home-page.component";
import {CustomerComponent} from "./customer/customer.component";
import {AuthComponent} from "./auth/auth.component";
import {AboutUsPageComponent} from "./customer/about-us-page/about-us-page.component";
import {ContactPageComponent} from "./customer/contact-page/contact-page.component";
import {DetailsPageComponent} from "./customer/details-page/details-page.component";

export const routes: Routes = [
  { path: '',   redirectTo: '/customer/catalogue', pathMatch: 'full' },
  { path: 'auth/login', component: AuthComponent },
  { path: 'customer',
    title:'Client',
    component: CustomerComponent,
    children : [
      {
        title: 'Catalogue',
        path:'catalogue',
        component: HomePageComponent,
      },
      {
        title: 'Détails burger',
        path:':burgerId',
        component: DetailsPageComponent,
      },
      {
        title: 'About us',
        path:'aboutus',
        component: AboutUsPageComponent,
      },
      {
        title: 'Contacts',
        path:'contacts',
        component: ContactPageComponent,
      }
    ]
  },
  { path: 'admin',
    title:'Admin',
    component: CustomerComponent,
    children : [
      {
        title: 'Catalogue',
        path:'catalogue',
        component: HomePageComponent,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];
