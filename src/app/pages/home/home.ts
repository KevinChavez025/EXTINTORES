import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  activeSlide = 0;
  private interval: any;
  private emailjs: any;

  form = { nombre: '', email: '', telefono: '', mensaje: '' };
  enviando = false;
  mensajeExito = false;
  mensajeError = false;

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
    this.interval = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % 2;
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + 2) % 2;
  }

  goTo(index: number) {
    this.activeSlide = index;
  }

  async enviarMensaje() {
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    if (!isPlatformBrowser(this.platformId) || !this.emailjs) {
      this.mensajeError = true;
      setTimeout(() => this.mensajeError = false, 5000);
      return;
    }

    this.enviando = true;
    this.mensajeExito = false;
    this.mensajeError = false;

    try {
      await this.emailjs.send('service_4xnpcyf', 'template_x5vikgb', {
        nombre: this.form.nombre,
        email: this.form.email,
        telefono: this.form.telefono,
        mensaje: this.form.mensaje,
        name: this.form.nombre,
      }, '8FGkHEZ-X80u40cSq');
      this.enviando = false;
      this.mensajeExito = true;
      this.form = { nombre: '', email: '', telefono: '', mensaje: '' };
      setTimeout(() => this.mensajeExito = false, 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      this.enviando = false;
      this.mensajeError = true;
      setTimeout(() => this.mensajeError = false, 5000);
    }
  }
}