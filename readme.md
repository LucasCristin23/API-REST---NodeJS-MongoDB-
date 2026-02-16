# 🚀 API REST con Node.js, Express y MongoDB

Esta es una API diseñada con **Node.js**, **Express** y **MongoDB** para gestionar recursos de forma eficiente. Esta API forma parte del proyecto final del curso de "Desarrollo con NodeJS" de la Facultad Tecnologica Nacional

---
## 💻 Tecnologias utilizadas
 - NodeJS 
 - Express
 - MongoDB y mongoose
 - Dotenv
 - bcrypt
 - jsonwebtoken

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Requisitos previos
* Node.js (v14 o superior)
* MongoDB instalado o una cuenta en MongoDB Atlas

### 2. Configuración
1. Clona el repositorio: `git clone https://github.com/LucasCristin23/API-REST---NodeJS-MongoDB-`
2. Entra a la carpeta: `cd API-REST---NodeJS-MongoDB-`
3. Instala las dependencias: `npm install`

### 3. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
PORT=8080
MONGO_DB_STRING_CONECCTION=mongodb+srv://tu_usuario:tu_password@cluster.mongodb.net/nombre_db
JWT_SECRET_KEY="tuCodigoSecreto"

### 4. Ejecución
* Para desarrollo: `npm run dev`
* Para producción: `npm start`
  
---

## 📡 Descripción de Endpoints

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Registra un usuario nuevo. |
| **POST** | `/api/auth/login` | Obtiene Token de validacion. |
| **GET** | `/api/chat` | Obtiene todos los chats existentes. |
| **POST** | `/api/chat` | Crea un chat nuevo. |
| **GET** | `/api/chat/:id` | Busca un chat por el ID. |
| **DELETE** | `/api/chat/:id` | ELimina un chat por el ID. |

---

## 📝 Ejemplo de Request y Response

### Crear un registro (POST)
**URL:** `http://localhost:3000/auth/register`

**Body (JSON):**
{
  "email": "email@gmail.com",
  "password": "contraseña"
}

**Response (201 Created):**
{
  "ok": true,
  "status":201,
  messaje: "Usuario creado correctamente"
  "data": null
}

---

## 🧑‍💻 Autor

Lucas Cristin - 2026
