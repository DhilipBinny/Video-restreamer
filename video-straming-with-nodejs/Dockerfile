# Use the official Node.js 10 image.
   # https://hub.docker.com/_/node
   FROM node:10

   # Create and change to the app directory.
   WORKDIR /usr/src/app

   # Set this environmental variable to the integration you want to use
   ENV PORT=8001

   COPY package*.json ./

   # Install production dependencies.
   RUN npm install

   # Copy local code to the container image.
   COPY . .

   EXPOSE 8001

   # Run the web service on container startup.
   CMD [ "node", "serve.js" ]