FROM node:14

COPY . /frontend/
WORKDIR /frontend/

RUN yarn install
RUN yarn build
CMD yarn start