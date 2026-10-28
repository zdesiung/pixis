export interface Product {
  id: string;
  name: string;
  brand: "PiXis" | "Ariess" | "Ellia" | "El Pacífico" | "Institucional";
  category:
    | "sabanilla"
    | "higienico-jumbo"
    | "toalla-jumbo"
    | "interfoliadas"
    | "servilletas"
    | "dispensadores"
    | "domestico"
    | "jumbo-cajas"
    | "gofrado";
  categoryName: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  specs: {
    material?: string;
    presentation?: string;
    meters?: string;
    ply?: string;
    dimensions?: string;
    code?: string;
    moq: string;
    useCase: string;
  };
  featured?: boolean;
  badge?: string;
  priceEstimate?: string;
}

export const CATEGORIES = [
  {
    id: "todos",
    name: "Todos los Productos",
    icon: "Package",
    description: "Catálogo completo de higiene e insumos institucionales PiXis Distribuidora."
  },
  {
    id: "sabanilla",
    name: "Papel Sabanilla Blanco",
    icon: "FileSpreadsheet",
    description: "Ideal para clínicas, hospitales, spas, consultorios, hoteles y más."
  },
  {
    id: "higienico-jumbo",
    name: "Papel Higiénico Jumbo",
    icon: "Disc",
    description: "Rollos de alto rendimiento de 300, 400, 500 y 550 metros."
  },
  {
    id: "toalla-jumbo",
    name: "Papel Toalla Jumbo",
    icon: "Layers",
    description: "Rollos institucionales para secado eficiente de manos."
  },
  {
    id: "interfoliadas",
    name: "Toallas Interfoliadas",
    icon: "Box",
    description: "Toallas z-fold 100% celulosa y calidad económica en cajas x 20 pqts."
  },
  {
    id: "servilletas",
    name: "Servilletas",
    icon: "Sparkles",
    description: "Servilletas dobladas en 4 y cortadas de color blanco institucional."
  },
  {
    id: "dispensadores",
    name: "Dispensadores",
    icon: "Shield",
    description: "Dispensadores para papel jumbo, toallas, jabón líquido y alcohol."
  },
  {
    id: "domestico",
    name: "Higiénico Doméstico",
    icon: "Home",
    description: "Packs de papel higiénico Doble Hoja, Triple Hoja y Premium."
  },
  {
    id: "jumbo-cajas",
    name: "Jumbo en Cajas",
    icon: "Boxes",
    description: "Cajas institucionales x 20 y x 30 rollos doble hoja."
  },
  {
    id: "gofrado",
    name: "Toallas Papel Gofrado",
    icon: "Grid",
    description: "Sistema hoja por hoja de 175m y 200m doble hoja."
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "papel-sabanilla-ariess-bolsa",
    name: "Papel Sabanilla Blanco (Bolsa 8 Rollos)",
    brand: "Ariess",
    category: "sabanilla",
    categoryName: "Papel Sabanilla Blanco",
    shortDesc: "Papel Sabanilla Blanco de alta calidad, diseñado para brindar higiene, suavidad y resistencia.",
    fullDesc: "Papel Sabanilla Blanco institucional Ariess. Elaborado con 100% Celulosa Virgen, ultra suave, con textura firme y máxima resistencia. Especialmente formulado para proteger camillas y mesas clínicas de inspección.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "100% Celulosa Virgen",
      presentation: "8 rollos por bolsa",
      meters: "50 metros por rollo",
      ply: "Acolchado Resiliente",
      code: "EL PACIFICO / Ariess",
      moq: "1 Bolsa (8 rollos)",
      useCase: "Clínicas, hospitales, spas, consultorios médicos, hoteles y estética."
    },
    featured: true,
    badge: "Línea Institucional",
    priceEstimate: "Precio Especial Mayorista"
  },
  {
    id: "sabanilla-toalla-ariess-50m",
    name: "Sabanilla de Toalla Ariess (50 Mts x 8 Rollos)",
    brand: "Ariess",
    category: "sabanilla",
    categoryName: "Papel Sabanilla Blanco",
    shortDesc: "Sabanilla protectora formato ancho 47 cm para camillas y uso estético.",
    fullDesc: "Sabanilla de toalla blanco en rollo de 50 metros. Ancho de 47 cm para cobertura completa. Gran absorción y suavidad.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa Absorbente",
      presentation: "Caja / Paquete 8 Rollos",
      meters: "50 Mts",
      dimensions: "47 cm de ancho",
      code: "ARP0000005",
      moq: "1 Fardo",
      useCase: "Camillas médicas, salones de belleza, spas, terapia física."
    },
    featured: true,
    badge: "Código: ARP0000005",
    priceEstimate: "Cotizar por mayor"
  },

  // Papel Higiénico Jumbo
  {
    id: "papel-higienico-jumbo-550m",
    name: "Papel Higiénico Jumbo Blanco Una Hoja 550 Mts",
    brand: "Ellia",
    category: "higienico-jumbo",
    categoryName: "Papel Higiénico Jumbo",
    shortDesc: "Rollo de máxima capacidad para baños de alto tráfico de personas.",
    fullDesc: "Papel Higiénico Jumbo de 550 metros una hoja. Pack de 6 rollos por empaque. Desintegración rápida en agua y alta suavidad al tacto.",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa Blanca Institucional",
      presentation: "6 Rollos por empaque",
      meters: "550 Mts por rollo",
      ply: "Una Hoja",
      moq: "5 Paquetes (30 rollos)",
      useCase: "Centros comerciales, hospitales, industrias, universidades, estaciones."
    },
    featured: true,
    badge: "550 Mts - 6 Rollos",
    priceEstimate: "Venta Mayorista"
  },
  {
    id: "papel-higienico-jumbo-500m",
    name: "Papel Higiénico Jumbo Blanco Una Hoja 500 Mts",
    brand: "Ellia",
    category: "higienico-jumbo",
    categoryName: "Papel Higiénico Jumbo",
    shortDesc: "Excelente rendimiento y resistencia para servicios de baño institucional.",
    fullDesc: "Papel Higiénico Jumbo Ellia 500 metros una hoja. Empaque con 6 rollos. Mantenimiento reducido por cambio menos frecuente.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa 100%",
      presentation: "6 Rollos",
      meters: "500 Mts",
      ply: "Una Hoja",
      moq: "5 Paquetes",
      useCase: "Oficinas, restaurantes, hoteles, fábricas."
    },
    featured: false,
    badge: "500 Mts - 6 Rollos",
    priceEstimate: "Cotización Inmediata"
  },
  {
    id: "papel-higienico-jumbo-400m",
    name: "Papel Higiénico Jumbo Blanco Una Hoja 400 Mts",
    brand: "Ellia",
    category: "higienico-jumbo",
    categoryName: "Papel Higiénico Jumbo",
    shortDesc: "Formato balanceado de 400 metros para dispensadores jumbo estándar.",
    fullDesc: "Papel Higiénico Jumbo Ellia 400 Mts una hoja. Viene en fardo de 6 rollos. Excelente blancura y capacidad de absorción.",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa seleccionada",
      presentation: "6 Rollos",
      meters: "400 Mts",
      ply: "Una Hoja",
      moq: "5 Paquetes",
      useCase: "Edificios corporativos, restaurantes, centros educativos."
    },
    featured: false,
    badge: "400 Mts - 6 Rollos",
    priceEstimate: "Precio Distribuidor"
  },
  {
    id: "papel-higienico-jumbo-300m",
    name: "Papel Higiénico Jumbo Blanco Una Hoja 300 Mts",
    brand: "Ellia",
    category: "higienico-jumbo",
    categoryName: "Papel Higiénico Jumbo",
    shortDesc: "Rollo compacto de 300m para tráfico moderado y baños corporativos.",
    fullDesc: "Papel Higiénico Jumbo 300 metros una hoja. Pack de 6 rollos. Diseñado para optimizar consumo y evitar desperdicios.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa virgen / reciclada certificada",
      presentation: "6 Rollos",
      meters: "300 Mts",
      ply: "Una Hoja",
      moq: "5 Paquetes",
      useCase: "Clínicas, gimnasios, salas de eventos."
    },
    featured: false,
    badge: "300 Mts - 6 Rollos",
    priceEstimate: "Cotización por WhatsApp"
  },

  // Papel Toalla Jumbo
  {
    id: "papel-toalla-jumbo-300m",
    name: "Papel Toalla Jumbo Blanco Una Hoja 300 Mts",
    brand: "Ellia",
    category: "toalla-jumbo",
    categoryName: "Papel Toalla Jumbo",
    shortDesc: "Rollo toalla de 300m una hoja en pack de 4 rollos para dispensador a palanca o corte automático.",
    fullDesc: "Papel Toalla Jumbo Blanco una hoja de 300 metros. Secado rápido con menos hojas por usuario. Alta resistencia en húmedo.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Toalla Gofrada Absorbente",
      presentation: "4 Rollos por empaque",
      meters: "300 Mts por rollo",
      ply: "Una Hoja",
      moq: "3 Paquetes",
      useCase: "Cocinas comerciales, laboratorios, estaciones de lavado institucional."
    },
    featured: true,
    badge: "300 Mts - 4 Rollos",
    priceEstimate: "Oferta por Fardo"
  },
  {
    id: "papel-toalla-jumbo-200m",
    name: "Papel Toalla Jumbo Blanco Una Hoja 200 Mts",
    brand: "Ellia",
    category: "toalla-jumbo",
    categoryName: "Papel Toalla Jumbo",
    shortDesc: "Papel toalla 200 metros una hoja, paquete de 4 rollos.",
    fullDesc: "Toalla en rollo jumbo de 200m Ellia. Ideal para baños de empresas e industrias pesadas.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Papel Toalla Gofrado",
      presentation: "4 Rollos",
      meters: "200 Mts",
      ply: "Una Hoja",
      moq: "3 Paquetes",
      useCase: "Talleres, oficinas, centros de salud."
    },
    featured: false,
    badge: "200 Mts - 4 Rollos",
    priceEstimate: "Cotización Inmediata"
  },
  {
    id: "papel-toalla-150m-6rollos",
    name: "Papel Toalla Blanco Una Hoja 150 Mts (6 Rollos)",
    brand: "Ellia",
    category: "toalla-jumbo",
    categoryName: "Papel Toalla Jumbo",
    shortDesc: "Pack de 6 rollos x 150 metros cada uno. Alta frecuencia de recambio.",
    fullDesc: "Toalla blanca una hoja de 150 Mts en presentación de 6 rollos. Garantiza manos secas con solo 1-2 toques de papel.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Fibra de celulosa",
      presentation: "6 Rollos",
      meters: "150 Mts",
      ply: "Una Hoja",
      moq: "3 Paquetes",
      useCase: "Restaurantes, comedores, áreas de producción."
    },
    featured: false,
    badge: "150 Mts - 6 Rollos",
    priceEstimate: "Mayorista Directo"
  },

  // Toallas Interfoliadas
  {
    id: "interfoliada-100-celulosa-pixis",
    name: "Toallas Interfoliadas 100% Celulosa PiXis (Caja x 20 Pqts)",
    brand: "PiXis",
    category: "interfoliadas",
    categoryName: "Toallas Interfoliadas",
    shortDesc: "Toallas interfoliadas plegadas en Z, 100% Celulosa pura de máxima blancura y absorbencia.",
    fullDesc: "Toallas interfoliadas marca PiXis de calidad Premium 100% Celulosa. Presentación institucional en Caja de 20 paquetes. Hojas precortadas para dispensador universal.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "100% Celulosa Pura",
      presentation: "Caja x 20 paquetes",
      ply: "Hoja por Hoja (Z-Fold)",
      moq: "1 Caja (20 paquetes)",
      useCase: "Baños VIP, hoteles 5 estrellas, clínicas privadas, ejecutivos."
    },
    featured: true,
    badge: "100% Celulosa - Top Ventas",
    priceEstimate: "Precio por Caja"
  },
  {
    id: "interfoliada-economica-ariess",
    name: "Toallas Interfoliadas Económica Ariess (Caja x 20 Pqts)",
    brand: "Ariess",
    category: "interfoliadas",
    categoryName: "Toallas Interfoliadas",
    shortDesc: "Opción económica para alto volumen de uso en empresas e instituciones.",
    fullDesc: "Toalla interfoliada marca Ariess línea económica. Caja por 20 paquetes de rendimiento optimizado para minimizar presupuesto de higiene.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Fibra Reciclada Certificada / Mix",
      presentation: "Caja x 20 paquetes",
      ply: "Interfoliada",
      moq: "2 Cajas",
      useCase: "Escuelas, universidades, fábricas, entidades públicas."
    },
    featured: false,
    badge: "Económica - Caja x 20",
    priceEstimate: "Súper Precio Mayorista"
  },

  // Servilletas
  {
    id: "servilletas-dobladas-4-ellia",
    name: "Servilletas Dobladas en 4 Ellia (Color Blanco)",
    brand: "Ellia",
    category: "servilletas",
    categoryName: "Servilletas",
    shortDesc: "Servilletas blancas de papel dobladas en 4 partes para servilleteros de mesa.",
    fullDesc: "Servilletas institucionales Ellia dobladas en 4. Color blanco puro, suaves y absorbentes para restaurantes, eventos y cafeterías.",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Papel Tissue Blanco",
      code: "ELLSV000002",
      presentation: "Paquetes institucionales x 100 y fardos por mayor",
      moq: "1 Fardo",
      useCase: "Restaurantes, fast food, eventos, catering."
    },
    featured: true,
    badge: "Código: ELLSV000002",
    priceEstimate: "Precio Fardo"
  },
  {
    id: "servilletas-cortadas-ellia",
    name: "Servilletas Cortadas Ellia (Color Blanco)",
    brand: "Ellia",
    category: "servilletas",
    categoryName: "Servilletas",
    shortDesc: "Servilletas cortadas individuales para dispensadores barra / mesa.",
    fullDesc: "Servilletas cortadas marca Ellia blanco. Diseñadas para dispensador de una en una, reduciendo consumo hasta un 30%.",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa Suave",
      code: "ELLSV010002",
      presentation: "Caja / Fardo institucional",
      moq: "1 Fardo",
      useCase: "Barras de alimentos, fuentes de soda, comedores."
    },
    featured: false,
    badge: "Código: ELLSV010002",
    priceEstimate: "Cotización por WhatsApp"
  },

  // Dispensadores
  {
    id: "dispensador-higienico-jumbo",
    name: "Dispensador de Papel Higiénico Jumbo",
    brand: "Institucional",
    category: "dispensadores",
    categoryName: "Dispensadores",
    shortDesc: "Dispensador cerrado con cerradura de seguridad para rollos jumbo de 300m a 550m.",
    fullDesc: "Dispensador circular fabricado en ABS de alto impacto de color blanco. Incluye llave de seguridad antirobo y visor transparente para verificar stock de papel.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Plástico ABS Reforzado Anti-vandalismo",
      dimensions: "Compatibilidad universal rollos 300m - 550m",
      presentation: "Incluye kit de fijación y llave",
      moq: "1 unidad",
      useCase: "Todo tipo de baño institucional, comercial e industrial."
    },
    featured: true,
    badge: "Especial Institucional",
    priceEstimate: "Precio con Descuento por Lote"
  },
  {
    id: "dispensador-toalla-interfoliada",
    name: "Dispensador de Toalla Interfoliada",
    brand: "Institucional",
    category: "dispensadores",
    categoryName: "Dispensadores",
    shortDesc: "Dispensador compacto pared para toallas precortadas Z-Fold y V-Fold.",
    fullDesc: "Dispensador vertical para toalla interfoliada. Permite extraer una toalla a la vez sin tocar el equipo.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "ABS Blanco / Humo",
      moq: "1 unidad",
      useCase: "Oficinas, laboratorios, restaurantes, consultorios."
    },
    featured: false,
    badge: "Higiénico 100%",
    priceEstimate: "Cotización Inmediata"
  },
  {
    id: "dispensador-jabon-alcohol",
    name: "Dispensador de Jabón Líquido o Alcohol en Gel",
    brand: "Institucional",
    category: "dispensadores",
    categoryName: "Dispensadores",
    shortDesc: "Dispensador con depósito recargable de 800ml a 1000ml.",
    fullDesc: "Dispensador institucional de pulsador para jabón líquido, champú o gel desinfectante a base de alcohol. Fácil recarga.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "ABS Resistente",
      presentation: "Depósito interno 1L",
      moq: "1 unidad",
      useCase: "Áreas de desinfección, entradas, baños corporativos."
    },
    featured: false,
    badge: "Recargable 1 L",
    priceEstimate: "Cotizar por WhatsApp"
  },

  // Papel Higiénico Doméstico
  {
    id: "pixis-doble-hoja-pack4",
    name: "Papel Higiénico PiXis Doble Hoja (Pack x 4 und)",
    brand: "PiXis",
    category: "domestico",
    categoryName: "Higiénico Doméstico",
    shortDesc: "Textura suave y extra resistente para uso diario.",
    fullDesc: "Papel higiénico PiXis Doble Hoja en empaque de 4 rollos. Máximo confort para el hogar y oficinas medianas.",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa Seleccionada",
      presentation: "Pack x 4 und",
      ply: "Doble Hoja",
      moq: "1 Fardo (12 packs)",
      useCase: "Hogares, departamentos, oficinas residenciales."
    },
    featured: true,
    badge: "Doble Hoja",
    priceEstimate: "Precio por Fardo"
  },
  {
    id: "pixis-triple-hoja-pack4",
    name: "Papel Higiénico PiXis Triple Hoja (Pack x 4 und)",
    brand: "PiXis",
    category: "domestico",
    categoryName: "Higiénico Doméstico",
    shortDesc: "Triple capa acolchada para máxima suavidad y absorción.",
    fullDesc: "Papel higiénico PiXis Triple Hoja. 4 rollos acolchados de máxima densidad.",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Celulosa Acolchada",
      presentation: "Pack x 4 und",
      ply: "Triple Hoja",
      moq: "1 Fardo",
      useCase: "Hogares, hoteles de lujo."
    },
    featured: false,
    badge: "Triple Hoja",
    priceEstimate: "Cotización Inmediata"
  },
  {
    id: "pixis-premium-pack4",
    name: "Papel Higiénico PiXis Premium (Pack x 4 und)",
    brand: "PiXis",
    category: "domestico",
    categoryName: "Higiénico Doméstico",
    shortDesc: "Línea Premium ultraconfort con aroma y grabado decorativo.",
    fullDesc: "Papel higiénico PiXis Premium. 4 rollos con grabado de algodón y máxima delicadeza.",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "100% Celulosa Virgen Premium",
      presentation: "Pack x 4 und",
      ply: "Doble Hoja Acolchada",
      moq: "1 Fardo",
      useCase: "Hogares, residencias, boutiques."
    },
    featured: false,
    badge: "Línea Premium",
    priceEstimate: "Precio Especial"
  },

  // Jumbo en Cajas
  {
    id: "papel-jumbo-caja-30rollos-250m",
    name: "Papel Higiénico Jumbo Doble Hoja (Caja x 30 Rollos - 250 Mts)",
    brand: "Ariess",
    category: "jumbo-cajas",
    categoryName: "Jumbo en Cajas",
    shortDesc: "Presentación en caja de cartón protectora para almacenamiento apilable perfecto.",
    fullDesc: "Papel Higiénico Jumbo Doble Hoja de 250 metros en Caja de 30 rollos. Código de producto ARP0000026. Protege el papel del polvo y humedad durante almacenaje prolongado.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Doble Hoja Blanco",
      presentation: "Caja x 30 Rollos",
      meters: "250 Mts por rollo",
      code: "ARP0000026",
      moq: "1 Caja (30 rollos)",
      useCase: "Almacenes corporativos, hospitales, centros mineros e industriales."
    },
    featured: true,
    badge: "Caja x 30 Rollos - ARP0000026",
    priceEstimate: "Precio por Caja"
  },
  {
    id: "papel-jumbo-caja-20rollos-200m",
    name: "Papel Higiénico Jumbo Doble Hoja (Caja x 20 Rollos - 200 Mts)",
    brand: "Ariess",
    category: "jumbo-cajas",
    categoryName: "Jumbo en Cajas",
    shortDesc: "Caja institucional con 20 rollos x 200m doble hoja.",
    fullDesc: "Papel Higiénico Jumbo Doble Hoja en Caja x 20 rollos. Formato compacto de fácil maniobra para personal de limpieza.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Doble Hoja",
      presentation: "Caja x 20 Rollos",
      meters: "200 Mts",
      code: "ARP0000026",
      moq: "1 Caja",
      useCase: "Oficinas, restaurantes, escuelas."
    },
    featured: false,
    badge: "Caja x 20 Rollos",
    priceEstimate: "Cotización Inmediata"
  },

  // Toallas Gofrado
  {
    id: "toallas-papel-gofrado-200m",
    name: "Toallas de Papel Gofrado Sistema Hoja por Hoja 200 Mts Doble",
    brand: "Ariess",
    category: "gofrado",
    categoryName: "Toallas Papel Gofrado",
    shortDesc: "Sistema gofrado de alta absorción, 200 metros doble hoja.",
    fullDesc: "Toalla de papel gofrado con textura tridimensional para retención superior de agua. Ancho 47 cm, doble hoja de 200 Mts.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Papel Gofrado Doble Hoja",
      meters: "200 Mts",
      dimensions: "Ancho 47 cm",
      presentation: "Pack / Fardo institucional",
      moq: "2 Paquetes",
      useCase: "Talleres automotrices, gastronomía, plantas de procesamiento."
    },
    featured: true,
    badge: "200 Mts Doble Hoja",
    priceEstimate: "Cotizar por WhatsApp"
  },
  {
    id: "toallas-papel-gofrado-175m",
    name: "Toallas de Papel Gofrado Sistema Hoja por Hoja 175 Mts Doble",
    brand: "Ariess",
    category: "gofrado",
    categoryName: "Toallas Papel Gofrado",
    shortDesc: "Sistema gofrado 175 metros doble hoja 47 cm.",
    fullDesc: "Toallas de papel gofrado sistema hoja por hoja. 175 metros de gran resistencia.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: {
      material: "Gofrado Doble Hoja",
      meters: "175 Mts",
      dimensions: "Ancho 47 cm",
      moq: "2 Paquetes",
      useCase: "Limpieza de superficies, laboratorios."
    },
    featured: false,
    badge: "175 Mts Doble Hoja",
    priceEstimate: "Precio Mayorista"
  }
];

export const COMPANY_INFO = {
  name: "PiXis DISTRIBUIDORA",
  subName: "TU PROVEEDOR DE CONFIANZA",
  tagline: "CALIDAD, RAPIDEZ Y LOS MEJORES PRECIOS PARA TU EMPRESA",
  address: "Av. Principal Industrial #108, Lima / Central de Distribución",
  phone: "962 674 574",
  phoneFormatted: "962 674 574",
  whatsappNumber: "51962674574",
  email: "ventas@pixisdistribuidora.com",
  schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
  socials: {
    facebook: "https://facebook.com/pixisdistribuidora",
    instagram: "https://instagram.com/pixisdistribuidora",
    whatsapp: "https://wa.me/51962674574"
  },
  badges: [
    "PRECIOS MAYORISTAS",
    "FACTURA Y BOLETA",
    "ENTREGA RÁPIDA",
    "ATENCIÓN PERSONALIZADA"
  ],
  sectors: [
    { id: "empresas", name: "EMPRESAS", icon: "Building2" },
    { id: "hoteles", name: "HOTELES", icon: "Hotel" },
    { id: "restaurantes", name: "RESTAURANTES", icon: "Utensils" },
    { id: "hospitales", name: "HOSPITALES", icon: "Hospital" },
    { id: "colegios", name: "COLEGIOS", icon: "GraduationCap" },
    { id: "oficinas", name: "OFICINAS", icon: "Briefcase" },
    { id: "industrias", name: "INDUSTRIAS", icon: "Factory" }
  ],
  stats: [
    { label: "Clientes Satisfechos", value: "2,500+" },
    { label: "Rollos Mensuales", value: "50,000+" },
    { label: "Marcas Originales", value: "100%" },
    { label: "Despacho Inmediato", value: "24 Hrs" }
  ],
  footerHighlights: [
    { title: "VENTAS AL POR MAYOR Y MENOR", desc: "Atendemos requerimientos desde fardos hasta contenedores." },
    { title: "ABASTECEMOS EMPRESAS E INSTITUCIONES", desc: "Proveemos licitaciones y contratos corporativos permanentes." },
    { title: "PRODUCTOS ORIGINALES", desc: "Garantía de celulosa virgen y metraje real en cada empaque." },
    { title: "CALIDAD, SERVICIO Y CONFIANZA", desc: "Atención personalizada y asesoría técnica para tu negocio." }
  ]
};

export const SERVICES_DATA = [
  {
    id: "abastecimiento-institucional",
    title: "Abastecimiento Institucional Continuo",
    desc: "Programación de entregas periódicas para empresas, hospitales, colegios y hoteles sin interrupciones.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "venta-por-mayor",
    title: "Ventas al Por Mayor y Menor",
    desc: "Precios directos de distribuidor para revendedores, bodegas, restaurantes e industrias.",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "instalacion-dispensadores",
    title: "Instalación y Equipamiento de Dispensadores",
    desc: "Asesoría y dotación de dispensadores para papel higiénico jumbo, toallas interfoliadas y jabón.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "despacho-express",
    title: "Despacho Rápido y Facturación Directa",
    desc: "Envío express con boleta y factura electrónica para todas tus órdenes.",
    icon: "Clock",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80"
  }
];
