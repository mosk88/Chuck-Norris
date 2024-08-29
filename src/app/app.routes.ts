import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChuckComponent } from './chuck/chuck.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chuck', component: ChuckComponent },
    // { path: '**',component: HomeComponent }

];
