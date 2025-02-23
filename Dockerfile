FROM node:20.18-alpine AS builder
ARG BASE_URL
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
# Establece la variable de entorno para el build
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
RUN pnpm build;

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
