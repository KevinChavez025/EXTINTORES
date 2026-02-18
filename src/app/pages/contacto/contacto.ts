import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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
export class ContactoComponent implements OnInit {
  private emailjs: any;
  mostrarMapaModal = false;
  mostrarModalError = false;
  enviando = false;
  enviado = false;
  errorEnvio = false;
  errores: any = {};
  listaErrores: string[] = [];

  contacto = { nombre: '', email: '', telefono: '', mensaje: '' };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const ejsModule = await import('@emailjs/browser');
        this.emailjs = ejsModule.default;
        this.emailjs.init('8FGkHEZ-X80u40cSq');
      } catch (e) {
        console.error('No se pudo cargar EmailJS:', e);
      }
    }
  }

  validarFormulario(): boolean {
    this.errores = {};
    this.listaErrores = [];

    if (!this.contacto.nombre.trim()) {
      this.errores.nombre = 'El nombre es obligatorio.';
      this.listaErrores.push('El nombre es obligatorio.');
    } else if (this.contacto.nombre.trim().length < 3) {
      this.errores.nombre = 'El nombre debe tener al menos 3 caracteres.';
      this.listaErrores.push('El nombre debe tener al menos 3 caracteres.');
    }

    if (!this.contacto.email.trim()) {
      this.errores.email = 'El correo es obligatorio.';
      this.listaErrores.push('El correo es obligatorio.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contacto.email)) {
      this.errores.email = 'El correo no es válido.';
      this.listaErrores.push('El correo no es válido.');
    }

    if (!this.contacto.telefono.trim()) {
      this.errores.telefono = 'El teléfono es obligatorio.';
      this.listaErrores.push('El teléfono es obligatorio.');
    } else if (!/^\d{7,15}$/.test(this.contacto.telefono.trim())) {
      this.errores.telefono = 'El teléfono debe tener entre 7 y 15 dígitos.';
      this.listaErrores.push('El teléfono debe tener entre 7 y 15 dígitos.');
    }

    if (!this.contacto.mensaje.trim()) {
      this.errores.mensaje = 'El mensaje es obligatorio.';
      this.listaErrores.push('El mensaje es obligatorio.');
    } else if (this.contacto.mensaje.trim().length < 10) {
      this.errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
      this.listaErrores.push('El mensaje debe tener al menos 10 caracteres.');
    }

    if (this.listaErrores.length > 0) {
      this.mostrarModalError = true;
    }

    return this.listaErrores.length === 0;
  }

  cerrarModalError() {
    this.mostrarModalError = false;
  }

  async enviarContacto(event: Event) {
    event.preventDefault();

    if (!this.validarFormulario()) return;

    if (!isPlatformBrowser(this.platformId) || !this.emailjs) return;

    this.enviando = true;
    this.enviado = false;
    this.errorEnvio = false;

    try {
      await this.emailjs.send('service_4xnpcyf', 'template_x5vikgb', {
        nombre: this.contacto.nombre,
        email: this.contacto.email,
        telefono: this.contacto.telefono,
        mensaje: this.contacto.mensaje,
        name: this.contacto.nombre,
      }, '8FGkHEZ-X80u40cSq');
      this.enviando = false;
      this.enviado = true;
      this.errores = {};
      this.contacto = { nombre: '', email: '', telefono: '', mensaje: '' };
      setTimeout(() => this.enviado = false, 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      this.enviando = false;
      this.errorEnvio = true;
      setTimeout(() => this.errorEnvio = false, 5000);
    }
  }

  abrirMapa() { this.mostrarMapaModal = true; }
  cerrarMapa() { this.mostrarMapaModal = false; }
}