# Server Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install Python, build tools for native dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 4000

# Start development server
CMD ["npm", "run", "server"]