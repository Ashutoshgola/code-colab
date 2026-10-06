# CodeCollab

CodeCollab is a real-time collaborative coding platform that allows developers to work together, share code, and communicate through a web-based development environment.

## 🚀 Features

- 👥 Real-time collaborative coding
- 💬 Real-time communication with Socket.IO
- 🔐 Firebase Authentication
- 🤖 AI-powered coding assistance
- 🌐 React + Vite frontend
- ⚙️ Node.js + Express backend
- 🍃 MongoDB database
- 🐳 Docker & Docker Compose
- ☸️ Kubernetes deployment
- 🔀 Nginx reverse proxy
- 💾 Persistent MongoDB storage

## 🛠️ Tech Stack

**Frontend:** React, Vite, Socket.IO  
**Backend:** Node.js, Express.js, Socket.IO  
**Database:** MongoDB  
**Authentication:** Firebase  
**DevOps:** Docker, Docker Compose, Kubernetes, Nginx, Docker Hub

## 📁 Project Structure

```text
code-colab/
├── backend/              # Backend application
├── frontend/             # React frontend
├── nginx/                # Nginx configuration
├── k8s/                  # Kubernetes manifests
├── docker-compose.yml    # Docker Compose configuration
└── .gitignore

## 🐳 Run with Docker

Clone the repository:

git clone https://github.com/Ashutoshgola/code-colab.git
cd code-colab

Start the application:

docker compose up -d

Stop the application:

docker compose down

## ☸️ Kubernetes

The project includes Kubernetes manifests for:

- Frontend Deployment & Service
- Backend Deployment & Service
- MongoDB Deployment & Service
- PersistentVolume & PersistentVolumeClaim
- Ingress

Deploy the application:

kubectl apply -f k8s/

Check the deployment:

kubectl get pods -n codecolab
kubectl get services -n codecolab

## 🏗️ Architecture

User
  │
  ▼
Nginx / Ingress
  │
  ├── Frontend
  │
  ├── /api ──────► Backend ──────► MongoDB
  │
  └── /socket.io ► Backend

## 🔐 Security

Sensitive files such as `.env`, Firebase credentials, Kubernetes secrets, and local MongoDB data are excluded from version control.

## 👨‍💻 Author

**Ashutosh Gola**

GitHub: https://github.com/Ashutoshgola
