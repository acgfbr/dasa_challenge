FROM node:12

WORKDIR /usr/src/app/

COPY . .
RUN yarn

EXPOSE 3000
CMD [ "node", "app/server.js" ]