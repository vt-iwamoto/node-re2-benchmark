FROM node:10.16.0-alpine

WORKDIR /opt
COPY benchmark.js package.json package-lock.json ./

RUN apk add python make g++ && npm install

ENTRYPOINT [ "node", "benchmark.js" ]
