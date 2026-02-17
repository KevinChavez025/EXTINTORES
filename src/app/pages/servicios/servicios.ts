import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class Servicios {
  servicios = [
    { titulo: 'FUMIGACIÓN INTEGRAL', desc: 'Eliminación de Plagas y Microorganismos Patógenos', img: '' },
    { titulo: 'DESINFECCIÓN', desc: 'Eliminación de Virus, Bacterias, Gérmenes y otros', img: '' },
    { titulo: 'DESINSECTACIÓN', desc: 'Eliminación de Insectos rastreros y voladores', img: '' },
    { titulo: 'DESRATIZACIÓN', desc: 'Eliminación de Roedores', img: '' },
    { titulo: 'LIMPIEZA DE TANQUE DE AGUA', desc: 'Limpieza de Tanque Elevado / Cisterna', img: '' },
    { titulo: 'LIMPIEZA DE AMBIENTES', desc: 'Limpieza de Ambientes Contaminados', img: '' },
    { titulo: 'LIMPIEZA DE CAMPANAS Y DUCTOS', desc: 'Eliminación de residuos de grasa y ceniza', img: '' },
    { titulo: 'LIMPIEZA DE TRAMPA DE GRASA', desc: 'Servicio de limpieza especializado', img: '' }
  ];

  openWhatsApp() {
    const phone = '51933444277';
    const msg = encodeURIComponent('Hola, quisiera información sobre sus servicios.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }
}
