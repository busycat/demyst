FROM node:18 as build
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn --immutable
COPY . .
RUN yarn build:all

FROM node:18 as server
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/dist/backend
COPY --from=build /usr/src/app/dist/apps/backend .
COPY --from=build /usr/src/app/dist/apps/frontend assets
RUN ls
EXPOSE 3333
CMD [ "node", "main.js" ]