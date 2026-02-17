import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Servicios } from './pages/servicios/servicios';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros},
  { path: 'servicios', component: Servicios},
  { path: 'productos', component: Productos },
  { path: 'contacto', component: Contacto },
  {path: 'producto-detalle/:id', component: ProductoDetalleComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
