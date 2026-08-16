export const NUMERO_WHATSAPP = import.meta.env.VITE_NUMERO_WHATSAPP;

if (!NUMERO_WHATSAPP && import.meta.env.DEV) {
  console.warn(
    'VITE_NUMERO_WHATSAPP não definido no .env — os links de WhatsApp não vão funcionar.'
  );
}