import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
  imports: [FormsModule, CommonModule],
})
export class ContactoComponent {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Control del modal del mapa
  mostrarMapaModal = false;

  contacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  enviarContacto(event: Event) {
    event.preventDefault();

    const mensaje = `
Nombre: ${this.contacto.nombre}
Correo: ${this.contacto.email}
Teléfono: ${this.contacto.telefono}
Mensaje: ${this.contacto.mensaje}
    `;

    const numeroWhatsApp = '51948768989';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    if (this.isBrowser) window.open(url, '_blank');

    this.contacto = { nombre: '', email: '', telefono: '', mensaje: '' };
  }

  abrirMapa() {
    this.mostrarMapaModal = true;
  }

  cerrarMapa() {
    this.mostrarMapaModal = false;
  }
}