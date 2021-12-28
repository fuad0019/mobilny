FROM node:17-alpine3.12
COPY . .
RUN node app.js