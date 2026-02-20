# 🛒 Product Catalog Backend

Este proyecto es el backend de una aplicación de gestión de catálogo de productos. Hemos desarrollado durante la cursada de la diplomatura una **REST API** robusta que permite gestionar usuarios, autenticación y el ciclo de vida completo de los productos.

## 🚀 Tecnologías y Herramientas
* **Runtime:** Node.js con **TypeScript** para un código más seguro y mantenible.
* **Framework:** **Express** para el manejo de rutas y servidor HTTP.
* **Base de Datos:** **MongoDB** (NoSQL) con conexión mediante Mongoose.
* **Autenticación:** **JSON Web Tokens (JWT)** para la protección de rutas.
* **Testing de API:** **Bruno** (Cliente API de código abierto).

## 🛠️ Funcionalidades Implementadas
* **Autenticación de Usuarios:** Registro e Inicio de sesión con generación de tokens.
* **CRUD de Productos:**
    * **Crear:** Alta de nuevos productos con validación.
    * **Leer:** Listado de productos con filtros de búsqueda.
    * **Actualizar:** Modificación parcial de datos mediante `PATCH`.
    * **Eliminar:** Borrado de productos específicos mediante su ID pasado por URL.
* **Seguridad:** Implementación de **Middleware** para validar el token JWT antes de permitir acciones de escritura o borrado.

## 📁 Estructura del Proyecto
He organizado el código siguiendo una arquitectura clara para facilitar su escalabilidad:
* `/controllers`: Lógica de negocio (manejo de peticiones y respuestas).
* `/routes`: Definición de los endpoints de la API (rutas de auth y productos).
* `/middleware`: Filtros de seguridad (validación de JWT).
* `/models`: Definición de los esquemas de datos para MongoDB (User y Product).

## 🧪 Testing con Bruno
Para garantizar la fiabilidad de la API, realicé pruebas exhaustivas utilizando **Bruno**. Esto me permitió validar:
1.  **Flujo de Login:** Verificación de credenciales y recepción del Token.
2.  **Validación de Rutas:** Confirmación de que el servidor responde con error si el recurso no existe (404).
3.  **Gestión de Recursos:** Eliminación y creación de productos enviando el ID por URL y el token en los encabezados.

## ⚙️ Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone <tu-url-de-github>
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` basado en el `.env.example` con tus credenciales de MongoDB, el puerto y el secreto para el JWT.
4.  **Iniciar en modo desarrollo:**
    ```bash
    npm run dev
    ```

---
*Proyecto desarrollado con enfoque en seguridad y buenas prácticas de desarrollo backend.*