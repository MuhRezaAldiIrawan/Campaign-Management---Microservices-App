FROM node:20

WORKDIR /usr/app/brand-management

COPY package*.json .

RUN npm install

COPY ./src ./src

EXPOSE 9000

CMD [ "npm", "start" ]

