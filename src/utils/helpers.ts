import { COMPANY_INFO, Product } from "../data/productsData";

/**
 * Creates a formatted WhatsApp url with encoded pre-filled text
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = `Hola PiXis DISTRIBUIDORA, vengo de su página web. Me gustaría solicitar información y cotizar productos de higiene e institucionales.`;
  const message = customMessage || defaultText;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a pre-filled quote message for a specific product
 */
export function getProductQuoteWhatsAppMessage(product: Product, quantity: number = 10, customNotes?: string): string {
  let msg = `*SOLICITUD DE COTIZACIÓN - PiXis DISTRIBUIDORA*\n\n`;
  msg += `📦 *Producto:* ${product.name}\n`;
  msg += `🏷️ *Marca:* ${product.brand}\n`;
  msg += `📁 *Categoría:* ${product.categoryName}\n`;
  msg += `🔢 *Cantidad Requerida:* ${quantity} unidades / bultos\n`;
  if (product.specs.meters) {
    msg += `📏 *Metraje:* ${product.specs.meters}\n`;
  }
  if (product.specs.presentation) {
    msg += `📦 *Presentación:* ${product.specs.presentation}\n`;
  }
  if (product.specs.code) {
    msg += `🔢 *Código:* ${product.specs.code}\n`;
  }
  if (customNotes) {
    msg += `📝 *Comentarios / RUC / Tipo:* ${customNotes}\n`;
  }
  msg += `\nSolicito precios mayoristas, disponibilidad de stock y tiempo de entrega. ¡Muchas gracias!`;
  return getWhatsAppLink(msg);
}

/**
 * Validates simple email
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
