FROM node:12.19.0-alpine3.10

RUN mkdir -p /usr/src/stock-service && chown -R node:node /usr/src/stock-service

RUN npm install -g serverless

WORKDIR /usr/src/stock-service

COPY package.json /usr/src/stock-service/package.json

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "dev"]