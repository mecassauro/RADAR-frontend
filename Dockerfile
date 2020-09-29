FROM node:12.18.4-alpine3.12
ADD . /react-app
WORKDIR /react-app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
