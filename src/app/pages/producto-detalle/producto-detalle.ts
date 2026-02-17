import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  enStock: boolean;
  estrellas: number;
  descripcion: string;
  variantes: string[];
}

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.html',
  styleUrls: ['./producto-detalle.css']  // ← CAMBIADO A styleUrls (plural) y array
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto | null = null;

  productos: Producto[] = [
    { 
      id: 1, 
      nombre: 'EXTINTOR PQS (ABC)', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor de polvo químico seco ABC, ideal para todo tipo de fuegos clase A, B y C. Certificado y con garantía de calidad.',
      variantes: ['DE 2KG.', 'DE 6KG.', 'DE 9KG.', 'DE 12KG.']
    },
    { 
      id: 2, 
      nombre: 'EXTINTOR ACETATO DE POTASIO (K)', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor especializado para fuegos de cocina clase K. Perfecto para restaurantes y cocinas industriales.',
      variantes: ['DE 3KG.', 'DE 6KG.', 'DE 9KG.']
    },
    { 
      id: 3, 
      nombre: 'BOTIQUIN DE PRIMEROS AUXILIOS ACRILICO CON MEDICINA', 
      imagen: '🏥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Botiquín completo con medicamentos esenciales para emergencias. Incluye vendas, gasas, alcohol y más.',
      variantes: ['PEQUEÑO', 'MEDIANO', 'GRANDE']
    },
    { 
      id: 4, 
      nombre: 'BOTIQUIN DE EMERGENCIA DE 30X40. MADERA CON MEDICINA', 
      imagen: '🏥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Botiquín de emergencia en madera resistente con contenido completo certificado.',
      variantes: ['30X40 CM', '40X50 CM']
    },
    { 
      id: 5, 
      nombre: 'LUZ DE EMERGENCIA MARCA CELUX DE 8.30 HRS.', 
      imagen: '💡', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Luz de emergencia con batería de larga duración. Ideal para cortes de energía.',
      variantes: ['8.30 HRS.', '12 HRS.']
    },
    { 
      id: 6, 
      nombre: 'CINTA DELIMITADORA 48MM X 18MT AMARILLO - NEGRO', 
      imagen: '⚠️', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Cinta de señalización para delimitar zonas de peligro y obras en construcción.',
      variantes: ['48MM X 18MT', '48MM X 36MT']
    },
    { 
      id: 7, 
      nombre: 'EXTINTOR CO2 (BC) DE 05LB.', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor de dióxido de carbono para fuegos clase B y C. No deja residuos, ideal para equipos electrónicos.',
      variantes: ['05LB.', '10LB.', '15LB.']
    },
    { 
      id: 8, 
      nombre: 'Extintor 50kg', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor industrial de gran capacidad con ruedas para fácil movilidad.',
      variantes: ['50KG RODANTE']
    },
    { 
      id: 9, 
      nombre: 'EXTINTOR PQS (ABC) 4KG', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor compacto de polvo químico seco, perfecto para vehículos y espacios pequeños.',
      variantes: ['4KG', '6KG']
    },
    { 
      id: 10, 
      nombre: 'BOTIQUIN DE PRIMEROS AUXILIOS METALICO', 
      imagen: '🏥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Botiquín metálico resistente para uso industrial con cerradura de seguridad.',
      variantes: ['PEQUEÑO', 'MEDIANO', 'GRANDE']
    },
    { 
      id: 11, 
      nombre: 'SEÑALETICA DE SEGURIDAD', 
      imagen: '🚨', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Señales de seguridad fotoluminiscentes para todo tipo de espacios.',
      variantes: ['20X30 CM', '30X40 CM']
    },
    { 
      id: 12, 
      nombre: 'GABINETE CONTRA INCENDIOS', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Gabinete metálico completo para equipos contra incendios con manguera incluida.',
      variantes: ['60X80 CM', '80X100 CM']
    },
    { 
      id: 13, 
      nombre: 'MANGUERA CONTRA INCENDIOS', 
      imagen: '🔥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Manguera de alta presión para sistemas contra incendios certificada.',
      variantes: ['15 METROS', '30 METROS']
    },
    { 
      id: 14, 
      nombre: 'DETECTOR DE HUMO', 
      imagen: '💨', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Detector de humo fotoeléctrico de alta sensibilidad con alarma de 85dB.',
      variantes: ['INALAMBRICO', 'CABLEADO']
    },
    { 
      id: 15, 
      nombre: 'ALARMA CONTRA INCENDIOS', 
      imagen: '🔔', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Sistema de alarma audiovisual contra incendios con estación manual.',
      variantes: ['BASICO', 'AVANZADO']
    },
    { 
      id: 16, 
      nombre: 'CASCO DE SEGURIDAD', 
      imagen: '⛑️', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Casco de protección industrial certificado con suspensión ajustable.',
      variantes: ['CLASE A', 'CLASE B']
    },
    { 
      id: 17, 
      nombre: 'CHALECO REFLECTIVO', 
      imagen: '🦺', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Chaleco de alta visibilidad con cintas reflectivas certificado ANSI.',
      variantes: ['TALLA S-M', 'TALLA L-XL']
    },
    { 
      id: 18, 
      nombre: 'GUANTES DE SEGURIDAD', 
      imagen: '🧤', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Guantes de protección para trabajo industrial resistentes y cómodos.',
      variantes: ['LATEX', 'NITRILO', 'CUERO']
    },
    { 
      id: 19, 
      nombre: 'LENTES DE PROTECCION', 
      imagen: '🥽', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Lentes de seguridad con protección UV y anti-empañante.',
      variantes: ['TRANSPARENTES', 'OSCUROS']
    },
    { 
      id: 20, 
      nombre: 'MASCARILLA RESPIRATORIA', 
      imagen: '😷', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Mascarilla respiratoria con filtros reemplazables certificada NIOSH.',
      variantes: ['N95', 'FFP2', 'FFP3']
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    this.producto = this.productos.find(p => p.id === id) || null;
  }

  volver() {
    this.router.navigate(['/productos']);
  }

  realizarPedido() {
    const numero = '51933444277'; // CAMBIA ESTO POR TU NÚMERO DE WHATSAPP
    const mensaje = `Hola, quiero consultar sobre: ${this.producto?.nombre}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  getEstrellas(cantidad: number): number[] {
    return Array(cantidad).fill(0);
  }
}
