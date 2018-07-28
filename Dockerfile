FROM node:carbon

# Create app directory
RUN mkdir -p /usr/src/mahrio
WORKDIR /usr/src/mahrio
COPY package*.json /usr/src/mahrio

RUN node --version
RUN npm --version
RUN npm update -g
RUN npm --version
RUN npm install

# If you are building your code for production
# RUN npm install --only=production

COPY . /usr/src/mahrio

EXPOSE 6085

CMD ["npm", "start"]
