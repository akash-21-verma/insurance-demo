import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { AdminComponent } from './pages/admin/admin.component';

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
    }
];