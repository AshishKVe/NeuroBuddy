# Neuro Buddy 🧠
> **AI-Powered Mental Health Companion**

![Status](https://img.shields.io/badge/Status-Prototype%20%2F%20In--Development-orange)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue)
![AI](https://img.shields.io/badge/AI-Gemini%20API-purple)

## 📖 Overview
**Neuro Buddy** is a full-stack mental health application designed to provide accessible, immediate, and empathetic support through AI-driven conversations. Unlike standard chatbots, Neuro Buddy utilizes **Google's Gemini API** to analyze user sentiment in real-time and deliver context-aware responses, acting as a preliminary assessment tool to optimize psychiatrist time.

This repository contains the **Architecture Design**, **API Specifications**, and **Database Schema** for the Neuro Buddy system.

---

## 🏗 System Architecture

The application follows a **Microservices-inspired layered architecture**, ensuring separation of concerns between the client, server, and AI services.

### Architecture Diagram
```mermaid
graph TD
    User[User Client] -->|HTTPS/JSON| Frontend[React + Vite UI]
    Frontend -->|REST API| API_Gateway[Node.js/Express API Gateway]
    
    subgraph Backend Services
        API_Gateway -->|Auth Middleware| Auth[Auth Service (JWT)]
        API_Gateway -->|Chat Routing| ChatService[Chat Controller]
        ChatService -->|Context+Prompt| AI_Engine[Gemini Integration Layer]
    end
    
    subgraph External AI
        AI_Engine -->|API Request| GoogleGemini[Google Gemini API]
        GoogleGemini -->|Response| AI_Engine
    end
    
    subgraph Data Layer
        ChatService -->|Store Logs| DB[(MongoDB Atlas)]
        Auth -->|Read/Write User| DB
    end