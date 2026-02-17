import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  openFacebook() {
    window.open('https://facebook.com', '_blank', 'noopener,noreferrer');
  }

  openInstagram() {
    window.open('https://instagram.com', '_blank', 'noopener,noreferrer');
  }

  openWhatsApp() {
    const phone = '51933444277';
    const msg = encodeURIComponent('Hola, quisiera información sobre sus servicios.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }
}