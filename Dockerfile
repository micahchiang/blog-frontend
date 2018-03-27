FROM node:carbon
MAINTAINER Micah Chiang

WORKDIR usr/src/app-frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run start-prod

FROM nginx:stable

COPY - from=build /app/build /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx -g 'daemon off;'"]