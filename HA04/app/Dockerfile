FROM node:7.1-slim

# Create app directory
RUN mkdir -p /myapp/src
WORKDIR /myapp

# Install app dependencies
ADD package.json /myapp/
RUN npm install

# Add app source
ADD src /myapp/src

EXPOSE 8080
CMD [ "npm", "start" ]
