# Etapa 1: Build con Node.js 22 y PNPM
FROM node:22-alpine AS builder

# Habilita pnpm vía corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Crea directorio de trabajo
WORKDIR /app

# Copia solo los archivos de dependencias para aprovechar cache
COPY package.json pnpm-lock.yaml ./

# Instala dependencias y las cachea en esta capa
RUN pnpm install --frozen-lockfile

# Ahora copiamos el resto del código (esto invalida el cache solo si el código cambió)
COPY . .

# Ejecuta build de producción
RUN pnpm run build

# Etapa 2: Imagen final con Nginx
FROM nginx:alpine

# Limpia archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia el build generado
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia tu configuración de Nginx personalizada
COPY default.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
