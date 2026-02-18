import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class ServiciosComponent {
  servicios = [
    { titulo: 'FUMIGACIÓN INTEGRAL', desc: 'Eliminación de Plagas y Microorganismos Patógenos', img: 'assets/Inicio/fumiservicios.webp' },
    { titulo: 'DESINFECCIÓN', desc: 'Eliminación de Virus, Bacterias, Gérmenes y otros', img: 'assets/Inicio/desinfeccion.webp' },
    { titulo: 'DESINSECTACIÓN', desc: 'Eliminación de Insectos rastreros y voladores', img: 'assets/Inicio/desinsectacion.webp' },
    { titulo: 'DESRATIZACIÓN', desc: 'Eliminación de Roedores', img: 'assets/Inicio/desratizacion.webp' },
    { titulo: 'LIMPIEZA DE TANQUE DE AGUA', desc: 'Limpieza de Tanque Elevado / Cisterna', img: 'assets/Servicios/limpiezatanque.webp' },
    { titulo: 'LIMPIEZA DE AMBIENTES', desc: 'Limpieza de Ambientes Contaminados', img: 'assets/Servicios/limpiezambientes.webp' },
    { titulo: 'LIMPIEZA DE CAMPANAS Y DUCTOS', desc: 'Eliminación de residuos de grasa y ceniza', img: 'assets/Servicios/limpiezacampanas.webp' },
    { titulo: 'LIMPIEZA DE TRAMPA DE GRASA', desc: 'Servicio de limpieza especializado', img: 'assets/Servicios/limpiezatrampa.webp' }
  ];

  openWhatsApp() {
    const phone = '51933444277';
    const msg = encodeURIComponent('Hola, quisiera información sobre sus servicios.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }
}