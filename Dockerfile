FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install && \
    npm install -g pushstate-server

COPY . /usr/src/app

RUN npm run build
EXPOSE 9000

CMD pushstate-server build
