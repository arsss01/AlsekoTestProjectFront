# stage 1
FROM node:10.16.3-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

#stage 2
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/alseko /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
