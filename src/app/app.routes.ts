import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TermlifeComponent } from './pages/termlife/termlife.component';
import { MoterinsuranceComponent } from './pages/moterinsurance/moterinsurance.component';
import { TermListComponent } from './components/term-list/term-list.component';
import { CarInsuListComponent } from './components/car-insu-list/car-insu-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginRegisterComponent
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'plans',
        component: DisplayCardComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'termlife',
        component: TermlifeComponent
    },
    {
        path: 'term-plans',
        component: TermListComponent
    },
    {
        path: 'moter',
        component: MoterinsuranceComponent
    },
    {
        path: 'moter-list',
        component: CarInsuListComponent
    },

];