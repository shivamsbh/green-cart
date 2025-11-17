# 🐳 Green Cart Docker Setup Guide

This guide will help you run the Green Cart application locally using Docker containers.

## 📋 Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (usually comes with Docker Desktop)

## 🚀 Quick Start

### 1. Clone and Navigate to Project
```bash
cd green-cart
```

### 2. Environment Setup
Copy the example environment file and configure your environment variables:
```bash
cp .env.example server/.env
```

Edit `server/.env` with your actual values:
- Replace `your_jwt_secret_key_here` with a secure random string
- Add your Cloudinary credentials (for image uploads)
- Add your Stripe keys (for payments)
- MongoDB URI is pre-configured for Docker setup

### 3. Build and Start Services
```bash
# Build and start all services
docker-compose up --build

# Or run in background
docker-compose up --build -d
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000
- **MongoDB**: localhost:27017

## 🛠️ Development Commands

```bash
# Start services
docker-compose up

# Stop services
docker-compose down

# View logs
docker-compose logs

# View specific service logs
docker-compose logs client
docker-compose logs server
docker-compose logs mongodb

# Restart a specific service
docker-compose restart server

# Rebuild and start services
docker-compose up --build

# Remove containers and volumes
docker-compose down -v
```

## 📂 Project Structure
```
green-cart/
├── client/                 # React frontend
│   ├── Dockerfile
│   └── .dockerignore
├── server/                 # Express backend
│   ├── Dockerfile
│   └── .dockerignore
├── docker-compose.yml      # Docker services configuration
├── .env.example           # Environment variables template
└── DOCKER_SETUP.md       # This file
```

## 🔧 Configuration Details

### Services:
1. **MongoDB**: Database running on port 27017
2. **Server**: Express API running on port 4000
3. **Client**: React app running on port 5173

### Volumes:
- Source code is mounted for hot reloading during development
- MongoDB data is persisted in Docker volume

### Network:
- All services communicate through `green-cart-network`

## 🐛 Troubleshooting

### Port Already in Use
If you get port conflicts:
```bash
# Check what's using the port
lsof -i :5173  # or :4000, :27017

# Kill the process or change ports in docker-compose.yml
```

### Permission Issues
On Linux/Mac, you might need to fix permissions:
```bash
sudo chown -R $USER:$USER green-cart/
```

### MongoDB Connection Issues
If the server can't connect to MongoDB:
1. Ensure MongoDB container is running: `docker-compose ps`
2. Check MongoDB logs: `docker-compose logs mongodb`
3. Verify connection string in `.env`

### Hot Reloading Not Working
If changes aren't reflected:
1. Restart the specific service: `docker-compose restart client`
2. Rebuild if needed: `docker-compose up --build client`

## 🧹 Cleanup

To remove all containers, volumes, and networks:
```bash
docker-compose down -v
docker system prune -a
```

## 📝 Notes

- This setup is for **local development only**
- Production deployment should use optimized builds
- MongoDB credentials are for local development only
- Make sure to keep your `.env` file secure and never commit it