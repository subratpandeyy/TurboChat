# Scalable Real-Time Chat Application

A **scalable real-time chat application** built using **WebSockets, Node.js, Redis (Valkey) Pub/Sub**, and **Aiven Cloud**. This project demonstrates how to scale WebSocket-based systems horizontally using Redis Pub/Sub architecture.

---

##  Features

*  Real-time messaging using WebSockets (Socket.IO)
*  Horizontal scalability using Redis Pub/Sub
*  Redis hosted on **Aiven Cloud** (Valkey)
*  Clean separation of client, server, and message broker
*  Works locally and in distributed environments

---

## Architecture Overview

* **Client**: Next.js / React frontend
* **WebSocket Server**: Node.js + Socket.IO
* **Message Broker**: Redis (Valkey) Pub/Sub
* **Scaling Strategy**:

  * Multiple socket servers
  * Redis broadcasts messages to all instances

> This ensures that users connected to different server instances still receive all messages.

---

## Tech Stack

* **Frontend**: Next.js (React)
* **Backend**: Node.js, Socket.IO
* **Message Broker**: Redis / Valkey
* **Cloud Provider**: Aiven
* **Language**: TypeScript

---

## Getting Started

### 1️. Clone the Repository

```bash
git clone https://github.com/subratpandeyy/TurboChat.git
cd turbochat
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3️. Environment Variables

Create a `.env` file and add:

```env
REDIS_HOST=your-aiven-host
REDIS_PORT=your-aiven-port
REDIS_USERNAME=your-username
REDIS_PASSWORD=your-password
```

> ⚠️ Aiven Redis **requires SSL**, make sure `tls: {}` is enabled in Redis config.

---

### 4️. Run the Application

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔄 Redis Pub/Sub Flow

1. Client sends message to WebSocket server
2. Server publishes message to Redis channel
3. Redis broadcasts message to all subscribers
4. All socket servers emit message to connected clients

---

## Key Learnings

* Why WebSockets don’t scale out-of-the-box
* How Redis Pub/Sub solves multi-instance communication
* How managed Redis (Aiven) simplifies infrastructure
* Clean real-time architecture patterns

