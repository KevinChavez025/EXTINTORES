import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  enStock: boolean;
  estrellas: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos {
  productos: Producto[] = [
    { id: 1, nombre: 'EXTINTOR PQS (ABC)', imagen: '🧯', enStock: true, estrellas: 5 },
    { id: 2, nombre: 'EXTINTOR ACETATO DE POTASIO (K)', imagen: '🧯', enStock: true, estrellas: 5 },
    { id: 3, nombre: 'BOTIQUIN DE PRIMEROS AUXILIOS ACRILICO CON MEDICINA', imagen: '🏥', enStock: true, estrellas: 5 },
    { id: 4, nombre: 'BOTIQUIN DE EMERGENCIA DE 30X40. MADERA CON MEDICINA', imagen: '🏥', enStock: true, estrellas: 5 },
    { id: 5, nombre: 'LUZ DE EMERGENCIA MARCA CELUX DE 8.30 HRS.', imagen: '💡', enStock: true, estrellas: 5 },
    { id: 6, nombre: 'CINTA DELIMITADORA 48MM X 18MT AMARILLO - NEGRO', imagen: '⚠️', enStock: true, estrellas: 5 },
    { id: 7, nombre: 'EXTINTOR CO2 (BC) DE 05LB.', imagen: '🧯', enStock: true, estrellas: 5 },
    { id: 8, nombre: 'Extintor 50kg', imagen: '🧯', enStock: true, estrellas: 5 },
    { id: 9, nombre: 'EXTINTOR PQS (ABC) 4KG', imagen: '🧯', enStock: true, estrellas: 5 },
    { id: 10, nombre: 'BOTIQUIN DE PRIMEROS AUXILIOS METALICO', imagen: '🏥', enStock: true, estrellas: 5 },
    { id: 11, nombre: 'SEÑALETICA DE SEGURIDAD', imagen: '🚨', enStock: true, estrellas: 5 },
    { id: 12, nombre: 'GABINETE CONTRA INCENDIOS', imagen: '🧯', enStock: true, estrellas: 5 },
    { id: 13, nombre: 'MANGUERA CONTRA INCENDIOS', imagen: '🔥', enStock: true, estrellas: 5 },
    { id: 14, nombre: 'DETECTOR DE HUMO', imagen: '💨', enStock: true, estrellas: 5 },
    { id: 15, nombre: 'ALARMA CONTRA INCENDIOS', imagen: '🔔', enStock: true, estrellas: 5 },
    { id: 16, nombre: 'CASCO DE SEGURIDAD', imagen: '⛑️', enStock: true, estrellas: 5 },
    { id: 17, nombre: 'CHALECO REFLECTIVO', imagen: '🦺', enStock: true, estrellas: 5 },
    { id: 18, nombre: 'GUANTES DE SEGURIDAD', imagen: '🧤', enStock: true, estrellas: 5 },
    { id: 19, nombre: 'LENTES DE PROTECCION', imagen: '🥽', enStock: true, estrellas: 5 },
    { id: 20, nombre: 'MASCARILLA RESPIRATORIA', imagen: '😷', enStock: true, estrellas: 5 }
  ];

  productosVisibles: Producto[] = [];
  productosAMostrar: number = 8;

  constructor(private router: Router) {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosVisibles = this.productos.slice(0, this.productosAMostrar);
  }

  verMas() {
    this.productosAMostrar += 4;
    this.cargarProductos();
  }

  mostrarMenos() {
    this.productosAMostrar = 8;
    this.cargarProductos();
  }

  verProducto(id: number) {
    this.router.navigate(['/producto-detalle', id]);
  }

  get hayMasProductos(): boolean {
    return this.productosAMostrar < this.productos.length;
  }

  get sePuedeMostrarMenos(): boolean {
    return this.productosAMostrar > 8;
  }

  getEstrellas(cantidad: number): number[] {
    return Array(cantidad).fill(0);
  }
}
