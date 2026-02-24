# 🚀 Catálogo de Productos API - Backend

Esta API REST gestiona un catálogo de productos con un sistema completo de autenticación. Permite el registro de usuarios, inicio de sesión y protección de rutas mediante tokens JWT.

## 🛠️ Tecnologías Utilizadas
* **Lenguaje:** TypeScript
* **Framework:** Express.js
* **Base de Datos:** MongoDB Atlas (vía Mongoose)
* **Seguridad:** JSON Web Tokens (JWT) & bcryptjs (10 rondas de salt)
* **Validación:** Zod
* **Documentación IA:** DeepWiki

## ⚙️ Arquitectura y Funcionamiento
El proyecto sigue el patrón **MVC (Modelo-Vista-Controlador)**, separando responsabilidades en controladores, modelos, rutas y middlewares para asegurar un código escalable y limpio.

* **Autenticación:** Las contraseñas se hashean antes de guardarse. Al loguearse, el servidor firma un JWT con una validez de 1 hora.
* **Protección de Rutas:** Se utiliza un `authMiddleware` que verifica el token en el header `Authorization: Bearer <token>` antes de permitir el acceso a los productos.
* **Búsqueda Avanzada:** Los productos pueden filtrarse dinámicamente por categoría, precio máximo (operador `$lte`) y nombre (operador `$regex` insensible a mayúsculas).

## 📌 Endpoints de la API

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **POST** | `/auth/register` | Registra un nuevo usuario (email, username, password). |
| **POST** | `/auth/login` | Autentica al usuario y devuelve el Token JWT. |
| **GET** | `/products` | Lista productos con filtros opcionales (categoría, precio, nombre). |
| **POST** | `/products` | Crea un nuevo producto (Requiere Token). |
| **PATCH** | `/products/:id` | Actualiza parcialmente un producto por su ID (Requiere Token). |
| **DELETE** | `/products/:id` | Elimina un producto por su ID (Requiere Token). |

> **Nota:** Todos los errores siguen un formato consistente: `{ success: false, error: "mensaje" }`.

## 📂 Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con los siguientes datos:
* `URI_DB`: Tu cadena de conexión de MongoDB Atlas.
* `JWT_SECRET`: Una clave secreta para firmar los tokens.
* `PORT`: Puerto de ejecución (por defecto 3000).

## 🚀 Pruebas con Bruno
Se incluye una colección de peticiones para **Bruno** en el repositorio (archivo `.json`). Para usarlas:
1. Abre Bruno.
2. Selecciona "Import Collection".
3. Carga el archivo JSON adjunto para probar todos los endpoints automáticamente.

## 📚 Documentación Avanzada (DeepWiki)
Para una exploración interactiva de la arquitectura, diagramas de flujo y análisis detallado del código, visita nuestra Wiki generada por IA:

🔗 **[Ver Documentación Interactiva en DeepWiki](https://deepwiki.com/luisinavinuela/luisina-api-backend-utn)**
