import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomePageComponent} from "./customer/home-page/home-page.component";
import {CustomerComponent} from "./customer/customer.component";
import {AuthComponent} from "./auth/auth.component";
import {AboutUsPageComponent} from "./customer/about-us-page/about-us-page.component";
import {ContactPageComponent} from "./customer/contact-page/contact-page.component";
import {DetailsPageComponent} from "./customer/details-page/details-page.component";
import {ManagerComponent} from "./manager/manager.component";
import {BurgerComponent} from "./manager/burger/burger.component";
import {BurgersListComponent} from "./manager/burger/burgers-list/burgers-list.component";
import {CreateBurgerComponent} from "./manager/burger/create-burger/create-burger.component";
import {UpdateBurgerComponent} from "./manager/burger/update-burger/update-burger.component";
import {SingleBurgerComponent} from "./manager/burger/single-burger/single-burger.component";

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
        path:'burgers/:burgerId',
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
  { path: 'manager',
    title:'Manager',
    component: ManagerComponent,
    children : [
      {
        title: 'Accueil',
        path:'home',
        component: HomePageComponent,
      },
      {
        title: 'Burgers',
        path:'burgers',
        component: BurgerComponent,
        children : [
          {
            title: 'Burgers list',
            path:'list',
            component: BurgersListComponent,
          },
          {
            title: 'Create burger',
            path:'create',
            component: CreateBurgerComponent,
          },
          {
            title: 'Update burger',
            path:'update/:burgerId',
            component: UpdateBurgerComponent,
          },
          {
            title: 'Update burger',
            path:':burgerId',
            component: SingleBurgerComponent,
          },
        ]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];
