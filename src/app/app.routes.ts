import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { NosotrosComponent } from './pages/nosotros/nosotros';
import { ServiciosComponent } from './pages/servicios/servicios';
import { ProductosComponent } from './pages/productos/productos';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
