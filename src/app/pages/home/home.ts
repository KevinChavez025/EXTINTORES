import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  activeSlide = 0;
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.preloadImages([
        'assets/Inicio/herosection.webp',
        'assets/Inicio/herosection2.webp',
        'assets/Inicio/catalogo.webp',
        'assets/Inicio/fumigacion.webp',
        'assets/Inicio/desinfeccion.webp',
        'assets/Inicio/desinsectacion.webp',
        'assets/Inicio/desratizacion.webp',
      ]);

      this.intervalId = setInterval(() => this.nextSlide(), 6000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private preloadImages(urls: string[]) {
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