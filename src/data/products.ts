export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  stock: number;
  soldCount: number;
  isFavorite: boolean;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  colors: string[];
  sizes: string[];
}

export const CATEGORIES = [
  "Electronics",
  "Apparel",
  "Living",
  "Wellness",
  "Footwear"
];

export const BRANDS = [
  "Aether",
  "Lumen",
  "Komorebi",
  "Onyx",
  "Nordic Studio",
  "Vellum",
  "Solis"
];

// Aesthetic Unsplash high-res imagery for 60 products
const IMAGE_COLLECTIONS: Record<string, string[]> = {
  "Electronics": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80", // Headphones
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80", // Mechanical Keyboard
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80", // Mouse
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80", // Vintage Mic
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80", // Retro Speaker
    "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80", // Smart Hub
    "https://images.unsplash.com/photo-1504274066654-fa291bb3ec31?w=600&auto=format&fit=crop&q=80", // Earbuds
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80", // Minimal Phone
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80", // Watch
    "https://images.unsplash.com/photo-1496181130204-7552cc14ac1a?w=600&auto=format&fit=crop&q=80", // Laptop
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80", // Desktop Monitor
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80", // Lens
  ],
  "Apparel": [
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80", // Trench Coat
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80", // Cotton Shirt
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80", // Leather Jacket
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=80", // Cashmere Sweater
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80", // Black Tee
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80", // Denim Jeans
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80", // Dress Shirt
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80", // Linen Blouse
    "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80", // Parka Jacket
    "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=600&auto=format&fit=crop&q=80", // Knit Vest
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&auto=format&fit=crop&q=80", // Wool Trousers
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80", // Blazer
  ],
  "Living": [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80", // Floor Lamp
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80", // Desk Chair
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=80", // Bed Frame
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80", // Armchair
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=80", // Ceramic Vase
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80", // Table Clock
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&auto=format&fit=crop&q=80", // Cushion Set
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80", // Wooden Table
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80", // Accent Chair
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80", // Designer Tray
    "https://images.unsplash.com/photo-1617806118233-18e1db207f62?w=600&auto=format&fit=crop&q=80", // Floating Shelves
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&auto=format&fit=crop&q=80", // Modern Rugs
  ],
  "Wellness": [
    "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&auto=format&fit=crop&q=80", // Diffuser
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80", // Serum Bottle
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80", // Incense Holder
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80", // Perfume
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80", // Bath Salt
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80", // Body Oil
    "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop&q=80", // Face Mask Set
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=80", // Herbal Teas
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80", // Eye Roller
    "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop&q=80", // Soy Candle
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80", // Massage Oil
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&auto=format&fit=crop&q=80", // Meditation Cushion
  ],
  "Footwear": [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80", // Beige Sneakers
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80", // Sports Runners
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80", // Leather Heeled Shoes
    "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&auto=format&fit=crop&q=80", // Minimal Sandals
    "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=80", // Classic Loafers
    "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80", // Chelsea Boots
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=80", // Casual Slip-ons
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80", // Black Sneakers
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=80", // Neon Running Shoes
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80", // Red Runners
    "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&auto=format&fit=crop&q=80", // Canvas Shoes
    "https://images.unsplash.com/photo-1613852348851-df1739db8201?w=600&auto=format&fit=crop&q=80", // Vintage Boots
  ]
};

const PRODUCT_NAMES: Record<string, string[]> = {
  "Electronics": [
    "AeroStream ANC Headphones", "Keystone Mechanical Keyboard", "Onyx Ergonomic Touch Mouse",
    "Vocalist Studio Condenser Mic", "Resonance Portable Retro Speaker", "Syncra Ambient Smart Hub",
    "Pulse Air Wireless Earbuds", "Monolith 5G Clean Phone", "Chronos Ceramic Smartwatch",
    "Horizon UltraBook Carbon 14", "Spectra 4K Designer Display", "Prime-Focus Prime Lens"
  ],
  "Apparel": [
    "Urban Nomad Trench Coat", "Classic Crisp Linen Blouse", "Stealth Black Lambskin Jacket",
    "Svalbard Cashmere Knit Sweater", "Essential Supima Cotton Tee", "Bespoke Raw Selvedge Denim",
    "Ascot Formal Double-Ply Shirt", "Verdant Breeze Linen Shirt", "Arctic Expedition Down Parka",
    "Merino Wool Heavyweight Vest", "Savile Tailored Flat-Trousers", "Executive Wool Blazer Jacket"
  ],
  "Living": [
    "Solis Solid Brass Floor Lamp", "Komorebi Walnut Ergonomic Chair", "Nirvana Floating Oak Bed Frame",
    "Aether Boucle Lounge Armchair", "Earthen Speckled Ceramic Vase", "Chronograph Minimal Desk Clock",
    "Cloud Cushion Organic Linen Set", "Horizon Oak Dining Table", "Lumen Sculpted Velvet Accent Chair",
    "Travertine Minimalist Serving Tray", "Nordic Floating Birch Shelves", "Kyoto Hand-Woven Jute Rug"
  ],
  "Wellness": [
    "Breathe Silent Ultrasonic Diffuser", "Botanical Hyaluronic Moisture Serum", "Kyoto Ceramic Incense Holder",
    "L'Homme Amber Absolu Perfume", "Dead Sea Mineral Bath Salt", "Radiance Cold-Pressed Jojoba Oil",
    "Kelp Infused Bio-Cellulose Face Mask", "Oolong Reserve Organic Tea Pack", "Jade Gua Sha & Facial Roller Set",
    "Vanilla Bourbon Natural Soy Candle", "Sandalwood Soothing Massage Oil", "Zen Organic Cotton Meditation Cushion"
  ],
  "Footwear": [
    "AeroLite Eco Beige Sneakers", "HyperPace Pro Carbon Runners", "Slingback Suede Block Heels",
    "Nomad Breathable Mesh Sandals", "Milano Calfskin Classic Loafers", "Sussex Waterproof Chelsea Boots",
    "Tempo Knitted Slip-On Sneakers", "Stealth-Walk Prime Knit Black Sneakers", "Veloce Volt Neon Speed Shoes",
    "Crimson Streak Performance Runners", "Classic Retro Canvas High-Tops", "Heritage Full-Grain Work Boots"
  ]
};

const PRODUCT_DESCRIPTIONS: Record<string, string> = {
  "Electronics": "Engineered with audiophile-grade components and finished in premium tactile materials. This product represents the pinnacle of minimal hardware engineering, designed to integrate seamlessly into a modern desktop aesthetic.",
  "Apparel": "Expertly tailored from sustainably sourced luxury materials. Featuring reinforced seams, premium Japanese metal hardware, and an architectural silhouette that balances contemporary fashion with daily versatile comfort.",
  "Living": "Hand-finished by master craftspeople using premium local woods, ceramics, and stone. Combining timeless mid-century aesthetic cues with rigorous structural engineering to anchor your living spaces.",
  "Wellness": "Formulated using clinically tested botanical ingredients and ancient wellness wisdom. Free of synthetic toxins, parabens, and sulfates, bringing high-end spa therapies to your daily self-care ritual.",
  "Footwear": "Constructed around anatomically optimized lasts with recycled memory-foam insoles. Combining lightweight shock absorption with weather-resistant luxury leather or breathable engineered knits."
};

function generate60Products(): Product[] {
  const products: Product[] = [];
  let index = 1;

  CATEGORIES.forEach((category) => {
    const images = IMAGE_COLLECTIONS[category] || [];
    const names = PRODUCT_NAMES[category] || [];
    const description = PRODUCT_DESCRIPTIONS[category];

    for (let i = 0; i < 12; i++) {
      const price = Math.round((45 + i * 40 + (index % 7) * 12) * 10) / 10;
      const discountPercent = 10 + (index % 5) * 5; // 10%, 15%, 20%, 25%, 30%
      const oldPrice = Math.round((price / (1 - discountPercent / 100)) * 10) / 10;
      const brand = BRANDS[index % BRANDS.length];
      const rating = Math.round((4.2 + (index % 9) * 0.1) * 10) / 10;
      const reviews = 15 + (index * 4) + (index % 3) * 11;
      const stock = 5 + (index % 25);
      const soldCount = 50 + (index * 8) + (index % 12);

      const pColors = index % 3 === 0 ? ["Charcoal", "Cream", "Moss"] :
                     index % 3 === 1 ? ["Silver", "Onyx", "Sand"] : ["Navy", "Rust", "Alabaster"];

      const pSizes = category === "Footwear" ? ["7", "8", "9", "10", "11"] :
                    category === "Apparel" ? ["S", "M", "L", "XL"] : ["Standard", "Plus"];

      const specs: Record<string, string> = {
        "Material": category === "Electronics" ? "Aircraft-Grade Aluminum & Polymer" :
                    category === "Apparel" ? "80% Organic Cotton, 20% Cashmere" :
                    category === "Living" ? "Solid American Walnut & Brass Accents" :
                    category === "Wellness" ? "100% Pure Organic Extracts & Cold-Pressed Base" : "Full-Grain Italian Calfskin Leather",
        "Designer": "Studio Komorebi Copenhagen",
        "Origin": category === "Electronics" ? "Designed in Denmark, Made in Japan" : "Handcrafted in Portugal",
        "Warranty": category === "Electronics" ? "3-Year International" : "1-Year Premium Coverage",
        "Dimensions": category === "Living" ? "45cm x 45cm x 65cm" : "Standard Retail Packaging"
      };

      products.push({
        id: `p-${index}`,
        title: names[i] || `${category} Custom Product ${i + 1}`,
        brand,
        category,
        price,
        oldPrice,
        discount: discountPercent,
        rating,
        reviews,
        stock,
        soldCount,
        isFavorite: index % 7 === 0,
        description,
        specifications: specs,
        images: [
          images[i % images.length],
          images[(i + 1) % images.length],
          images[(i + 2) % images.length],
        ],
        colors: pColors,
        sizes: pSizes
      });

      index++;
    }
  });

  return products;
}

export const PRODUCTS: Product[] = generate60Products();
