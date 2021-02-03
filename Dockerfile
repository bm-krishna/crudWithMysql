FROM node:stretch-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4040
CMD [ "npm","run", "build" ]
