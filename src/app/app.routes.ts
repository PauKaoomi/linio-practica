import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "tienda", component: TiendaComponent}
];
