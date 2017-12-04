FROM node:6.11.5

LABEL description="YSDT-F2E-MockServer"

ADD code /html

WORKDIR /html

RUN npm install webpack -g && npm install

EXPOSE 5000

CMD npm run server