FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm instal
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]