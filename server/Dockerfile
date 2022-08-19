FROM node:16

EXPOSE 4000

ENV APP_ROOT=/usr/app

WORKDIR ${APP_ROOT}

COPY . .

RUN npm install

CMD node ./dist/server.js