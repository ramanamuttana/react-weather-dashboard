

````md
# React Weather Dashboard 🌦️

A static React-based Weather Dashboard application built for demonstration and testing purposes.  
The application is packaged as a Docker image and supports versioned deployments, making it suitable for Blue-Green and Canary deployment strategies.

---

## 📌 Features
- React-based UI
- Static demo weather dashboard
- Dockerized for easy deployment
- Versioned images (v1.0 and v1.1)
- Suitable for Blue-Green and Canary deployments

---

## 🛠️ Tech Stack
- React
- Node.js
- Docker
- Nginx (for static serving in Docker)

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Steps
```bash
npm install
npm start
````

The application will be available at:

👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📷 Application Screenshots

### 🔹 Version 1.0

![V1.0 Screenshot](https://github.com/ramanamuttana/react-dashboard/blob/main/images/Screenshot%202024-11-17%20190716.png)

### 🔹 Version 1.1

![V1.1 Screenshot](https://github.com/ramanamuttana/react-weather-dashboard/blob/main/images/Screenshot%202026-01-11%20at%2015.15.05.png)

---

## 🐳 Docker Usage

### Docker Hub Repository

👉 [https://hub.docker.com/r/ramanamuttana/react-weather-app/tags](https://hub.docker.com/r/ramanamuttana/react-weather-app/tags)

### Available Versions

* `ramanamuttana/react-weather-app:v1.0`
* `ramanamuttana/react-weather-app:v1.1`

### Run Version 1.0

```bash
docker run -d -p 3000:80 ramanamuttana/react-weather-app:v1.0
```

### Run Version 1.1

```bash
docker run -d -p 3001:80 ramanamuttana/react-weather-app:v1.1
```

Access via:

* V1.0 → [http://localhost:3000](http://localhost:3000)
* V1.1 → [http://localhost:3001](http://localhost:3001)

---

## 🔵🟢 Blue-Green Deployment

Blue-Green deployment allows switching traffic between two identical environments.

### Example

* **Blue Environment** → v1.0
* **Green Environment** → v1.1

Both versions run simultaneously:

```bash
docker run -d -p 3000:80 ramanamuttana/react-weather-app:v1.0
docker run -d -p 3001:80 ramanamuttana/react-weather-app:v1.1
```

Traffic can be switched at the **load balancer / reverse proxy (e.g., Nginx, Traefik)** level by changing the active backend.

✅ Zero downtime
✅ Easy rollback

---

## 🐤 Canary Deployment

Canary deployment releases a new version to a **small subset of users** before full rollout.

### Example Strategy

* 90% traffic → v1.0
* 10% traffic → v1.1

Run both versions:

```bash
docker run -d -p 3000:80 ramanamuttana/react-weather-app:v1.0
docker run -d -p 3001:80 ramanamuttana/react-weather-app:v1.1
```

Use a reverse proxy (Nginx / Traefik / Kubernetes Ingress) to route partial traffic to v1.1.

✅ Reduced risk
✅ Real-user validation

---

## 📦 Use Cases

* CI/CD pipeline demonstrations
* Docker & deployment strategy learning
* Blue-Green / Canary deployment testing
* Frontend infrastructure demos

---

## 📄 License

This project is intended for **demo and educational purposes**.

---



