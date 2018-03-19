FROM node:carbon
MAINTAINER Micah Chiang

WORKDIR usr/src/app-frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run start-prod