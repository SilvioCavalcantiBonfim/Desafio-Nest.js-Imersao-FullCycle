FROM node:20-slim

WORKDIR /home/node/app

USER node

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/main.js" ]