// src/utils/config.jsx
export const NUMERO_WHATSAPP = '5561991413865';

if (!NUMERO_WHATSAPP && import.meta.env.DEV) {
  console.warn(
    'VITE_NUMERO_WHATSAPP não definido no .env — os links de WhatsApp não vão funcionar.'
  );
}