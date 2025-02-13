FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

EXPOSE 3001

CMD ["npm", "start"]