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
  styles: [`
    .producto-detalle-page {
      max-width: 1400px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      background: #fff;
    }

    .producto-contenedor {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }

    .producto-imagen-col {
      position: sticky;
      top: 120px;
    }

    .imagen-box {
      background: #ffffff;
      border-radius: 20px;
      padding: 60px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 550px;
      border: 1px solid #f0f0f0;
    }

    .btn-zoom {
      position: absolute;
      top: 25px;
      right: 25px;
      width: 50px;
      height: 50px;
      background: white;
      border: 2px solid #ddd;
      border-radius: 50%;
      cursor: pointer;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn-zoom:hover {
      background: #f8f9fa;
      border-color: #ff6600;
      transform: scale(1.1);
    }

    .imagen-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .placeholder-imagen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 40px;
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      border: 3px dashed #ddd;
      border-radius: 15px;
      text-align: center;
    }

    .emoji-temporal {
      font-size: 180px;
      display: block;
      margin-bottom: 20px;
      animation: flotar 3s ease-in-out infinite;
    }

    .texto-placeholder {
      font-size: 16px;
      color: #999;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @keyframes flotar {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
    }

    .producto-info-col {
      padding-top: 20px;
    }

    .titulo-producto {
      font-size: 42px;
      font-weight: 800;
      color: #222;
      line-height: 1.2;
      margin-bottom: 20px;
      letter-spacing: -0.5px;
    }

    .estrellas-producto {
      display: flex;
      gap: 5px;
      margin-bottom: 30px;
    }

    .estrella {
      font-size: 28px;
    }

    .descripcion-box {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 30px;
      border-left: 4px solid #ff6600;
    }

    .descripcion-box h3 {
      font-size: 20px;
      color: #333;
      margin-bottom: 12px;
      font-weight: 700;
    }

    .descripcion-box p {
      font-size: 16px;
      color: #666;
      line-height: 1.7;
      margin: 0;
    }

    .variantes-box {
      background: linear-gradient(135deg, #fff8f0 0%, #ffffff 100%);
      border-left: 5px solid #ff6600;
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 30px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }

    .variantes-box h3 {
      font-size: 20px;
      color: #333;
      margin-bottom: 15px;
      font-weight: 700;
    }

    .lista-variantes {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .lista-variantes li {
      font-size: 17px;
      color: #444;
      padding: 12px 0;
      font-weight: 600;
      border-bottom: 1px solid #f0f0f0;
    }

    .lista-variantes li:last-child {
      border-bottom: none;
    }

    .lista-variantes li::before {
      content: '• ';
      color: #ff6600;
      font-weight: bold;
      margin-right: 10px;
      font-size: 20px;
    }

    .btn-whatsapp-pedido {
      background: linear-gradient(135deg, #25d366 0%, #20ba5a 100%);
      color: white;
      border: none;
      padding: 22px 0;
      border-radius: 50px;
      font-weight: 700;
      font-size: 17px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;
      transition: all 0.3s ease;
      box-shadow: 0 6px 25px rgba(37, 211, 102, 0.35);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 15px;
    }

    .btn-whatsapp-pedido:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 35px rgba(37, 211, 102, 0.45);
      background: linear-gradient(135deg, #20ba5a 0%, #1fa854 100%);
    }

    .icono-wa {
      font-size: 26px;
    }

    .btn-volver-productos {
      background: #fff;
      color: #555;
      border: 2px solid #ddd;
      padding: 16px 0;
      border-radius: 50px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      width: 100%;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .btn-volver-productos:hover {
      background: #f8f9fa;
      border-color: #999;
      color: #333;
    }

    .error-producto {
      text-align: center;
      padding: 150px 20px;
    }

    .error-producto h2 {
      font-size: 36px;
      color: #e74c3c;
      margin-bottom: 15px;
    }

    .error-producto p {
      font-size: 18px;
      color: #666;
      margin-bottom: 30px;
    }

    .btn-volver-error {
      background: #3498db;
      color: white;
      border: none;
      padding: 18px 45px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-volver-error:hover {
      background: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
    }

    @media (max-width: 1024px) {
      .producto-contenedor {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .producto-imagen-col {
        position: relative;
        top: 0;
      }

      .titulo-producto {
        font-size: 36px;
      }

      .emoji-temporal {
        font-size: 150px;
      }
    }

    @media (max-width: 768px) {
      .producto-detalle-page {
        padding: 40px 20px 60px;
      }

      .titulo-producto {
        font-size: 28px;
      }

      .emoji-temporal {
        font-size: 120px;
      }

      .imagen-box {
        min-height: 400px;
        padding: 40px;
      }

      .variantes-box,
      .descripcion-box {
        padding: 20px;
      }
    }

    @media (max-width: 480px) {
      .titulo-producto {
        font-size: 24px;
      }

      .emoji-temporal {
        font-size: 80px;
      }

      .imagen-box {
        min-height: 300px;
        padding: 30px;
      }

      .btn-whatsapp-pedido {
        padding: 18px 0;
        font-size: 15px;
      }

      .estrella {
        font-size: 22px;
      }

      .placeholder-imagen {
        padding: 20px;
      }

      .texto-placeholder {
        font-size: 12px;
      }
    }
  `]
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
      descripcion: 'Extintor de polvo químico seco ABC, ideal para todo tipo de fuegos.',
      variantes: ['DE 2KG.', 'DE 6KG.', 'DE 9KG.', 'DE 12KG.']
    },
    { 
      id: 2, 
      nombre: 'EXTINTOR ACETATO DE POTASIO (K)', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor especializado para fuegos de cocina clase K.',
      variantes: ['DE 3KG.', 'DE 6KG.', 'DE 9KG.']
    },
    { 
      id: 3, 
      nombre: 'BOTIQUIN DE PRIMEROS AUXILIOS ACRILICO CON MEDICINA', 
      imagen: '🏥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Botiquín completo con medicamentos esenciales para emergencias.',
      variantes: ['PEQUEÑO', 'MEDIANO', 'GRANDE']
    },
    { 
      id: 4, 
      nombre: 'BOTIQUIN DE EMERGENCIA DE 30X40. MADERA CON MEDICINA', 
      imagen: '🏥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Botiquín de emergencia en madera resistente con contenido completo.',
      variantes: ['30X40 CM', '40X50 CM']
    },
    { 
      id: 5, 
      nombre: 'LUZ DE EMERGENCIA MARCA CELUX DE 8.30 HRS.', 
      imagen: '💡', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Luz de emergencia con batería de larga duración.',
      variantes: ['8.30 HRS.', '12 HRS.']
    },
    { 
      id: 6, 
      nombre: 'CINTA DELIMITADORA 48MM X 18MT AMARILLO - NEGRO', 
      imagen: '⚠️', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Cinta de señalización para delimitar zonas de peligro.',
      variantes: ['48MM X 18MT', '48MM X 36MT']
    },
    { 
      id: 7, 
      nombre: 'EXTINTOR CO2 (BC) DE 05LB.', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor de dióxido de carbono para fuegos clase B y C.',
      variantes: ['05LB.', '10LB.', '15LB.']
    },
    { 
      id: 8, 
      nombre: 'Extintor 50kg', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor industrial de gran capacidad.',
      variantes: ['50KG RODANTE']
    },
    { 
      id: 9, 
      nombre: 'EXTINTOR PQS (ABC) 4KG', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Extintor compacto de polvo químico seco.',
      variantes: ['4KG', '6KG']
    },
    { 
      id: 10, 
      nombre: 'BOTIQUIN DE PRIMEROS AUXILIOS METALICO', 
      imagen: '🏥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Botiquín metálico resistente para uso industrial.',
      variantes: ['PEQUEÑO', 'MEDIANO', 'GRANDE']
    },
    { 
      id: 11, 
      nombre: 'SEÑALETICA DE SEGURIDAD', 
      imagen: '🚨', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Señales de seguridad para todo tipo de espacios.',
      variantes: ['20X30 CM', '30X40 CM']
    },
    { 
      id: 12, 
      nombre: 'GABINETE CONTRA INCENDIOS', 
      imagen: '🧯', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Gabinete metálico para equipos contra incendios.',
      variantes: ['60X80 CM', '80X100 CM']
    },
    { 
      id: 13, 
      nombre: 'MANGUERA CONTRA INCENDIOS', 
      imagen: '🔥', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Manguera de alta presión para sistemas contra incendios.',
      variantes: ['15 METROS', '30 METROS']
    },
    { 
      id: 14, 
      nombre: 'DETECTOR DE HUMO', 
      imagen: '💨', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Detector de humo fotoeléctrico de alta sensibilidad.',
      variantes: ['INALAMBRICO', 'CABLEADO']
    },
    { 
      id: 15, 
      nombre: 'ALARMA CONTRA INCENDIOS', 
      imagen: '🔔', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Sistema de alarma audiovisual contra incendios.',
      variantes: ['BASICO', 'AVANZADO']
    },
    { 
      id: 16, 
      nombre: 'CASCO DE SEGURIDAD', 
      imagen: '⛑️', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Casco de protección industrial certificado.',
      variantes: ['CLASE A', 'CLASE B']
    },
    { 
      id: 17, 
      nombre: 'CHALECO REFLECTIVO', 
      imagen: '🦺', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Chaleco de alta visibilidad con cintas reflectivas.',
      variantes: ['TALLA S-M', 'TALLA L-XL']
    },
    { 
      id: 18, 
      nombre: 'GUANTES DE SEGURIDAD', 
      imagen: '🧤', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Guantes de protección para trabajo industrial.',
      variantes: ['LATEX', 'NITRILO', 'CUERO']
    },
    { 
      id: 19, 
      nombre: 'LENTES DE PROTECCION', 
      imagen: '🥽', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Lentes de seguridad con protección UV.',
      variantes: ['TRANSPARENTES', 'OSCUROS']
    },
    { 
      id: 20, 
      nombre: 'MASCARILLA RESPIRATORIA', 
      imagen: '😷', 
      enStock: true, 
      estrellas: 5,
      descripcion: 'Mascarilla respiratoria con filtros reemplazables.',
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