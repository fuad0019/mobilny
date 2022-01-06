FROM node:17-alpine3.12
COPY . .
RUN npm install express
RUN npm install cross-fetch
RUN npm install ejs@3.1.6
CMD npm run start