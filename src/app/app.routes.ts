import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path: 'meal', component: NavbarComponent },
  { path: 'ingredients', component: NavbarComponent },
  { path: 'area', component: NavbarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'notFound', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent },
];
