import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  activeSlide = 0;
  private intervalId: any;

  ngOnInit() {
    // precarga (para que no se demore al cambiar)
    this.preloadImages([
      'assets/img/hero-extintores.webp',
      'assets/img/hero-fumigacion.webp',
      'assets/img/catalogo.webp',
      'assets/img/fumigacion-bg.webp',
      'assets/img/desinfeccion.webp',
      'assets/img/desinsectacion.webp',
      'assets/img/desratizacion.webp',
    ]);

    this.intervalId = setInterval(() => this.nextSlide(), 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  preloadImages(urls: string[]) {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
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
}
