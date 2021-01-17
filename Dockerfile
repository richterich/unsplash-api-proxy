FROM node:12.20.0-alpine

ARG PORT

COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]
