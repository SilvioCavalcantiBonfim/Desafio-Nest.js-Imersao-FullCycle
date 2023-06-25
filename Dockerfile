FROM node:20-slim

WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig*.json ./

RUN apt-get update -y && apt-get install -y openssl

RUN npm install

RUN npx prisma generate

USER node

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]