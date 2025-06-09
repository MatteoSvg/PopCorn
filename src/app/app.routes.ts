import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'account',
        component: AccountComponent
    }
];
