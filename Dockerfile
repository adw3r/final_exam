# Multi-stage build for Vite React app
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev=false

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html

COPY ./nginx.web.conf /etc/nginx/conf.d/default.conf
COPY ./ssl /etc/nginx/ssl
COPY --from=build /app/dist ./

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

