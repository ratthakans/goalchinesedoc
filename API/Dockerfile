# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application source code
COPY . .

# Create uploads and logs directories
RUN mkdir -p /usr/src/app/uploads /usr/src/app/logs

# Expose port 3000
EXPOSE 3000

# Start the backend application
CMD ["node", "src/app.js"]
