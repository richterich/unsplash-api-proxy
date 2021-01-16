FROM node:12.20.0-alpine

ARG WORKDIR_PATH
ARG PORT

WORKDIR ${WORKDIR_PATH}
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]
