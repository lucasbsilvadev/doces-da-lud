FROM node:18-alpine AS build

WORKDIR /app

# copiar dependências
COPY package*.json ./
RUN npm ci

# copiar todo o código
COPY . .

# Build do Vite
RUN npm run build

# NGINX para servir os arquivos estáticos
FROM nginx:alpine

# copiar os arquivos buildados
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
=======
FROM pierrezemb/gostatic
COPY . /srv/http/
CMD ["-port","8080","-https-promote", "-enable-logging"]
