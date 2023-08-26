FROM node:18 as build
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn --immutable
COPY . .
RUN yarn build:all

FROM node:18 as server
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist/backend .
EXPOSE 3333
CMD [ "node", "server.js" ]