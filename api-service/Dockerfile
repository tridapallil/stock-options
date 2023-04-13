FROM node:alpine

RUN mkdir -p /usr/src/api-service && chown -R node:node /usr/src/api-service

WORKDIR /usr/src/api-service

COPY package.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 4000

CMD ["yarn", "dev"]
