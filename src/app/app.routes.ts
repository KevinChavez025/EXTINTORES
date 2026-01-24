import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Servicios } from './pages/servicios/servicios';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros},
  { path: 'servicios', component: Servicios},
  { path: 'productos', component: Productos },
  { path: 'contacto', component: Contacto },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
]
