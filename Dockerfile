FROM node:12

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run build

CMD npm start
