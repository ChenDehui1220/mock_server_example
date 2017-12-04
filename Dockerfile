FROM node:6.11.5

LABEL description="YSDT-F2E-MockServer"

ADD code /html

WORKDIR /html

RUN npm install

EXPOSE 3000

CMD npm start