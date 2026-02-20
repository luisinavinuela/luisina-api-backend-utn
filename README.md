# 🛒 Product Catalog Backend - Diplomatura Backend Inicial

Este proyecto es el backend de una aplicación de gestión de catálogo de productos, desarrollado como parte de la **Diplomatura de Backend Inicial**. He implementado una **REST API** robusta que permite gestionar usuarios, autenticación y el ciclo de vida completo de los productos.

## 🚀 Tecnologías y Requisitos Técnicos
* **Lenguaje:** **TypeScript** para un tipado estricto y código mantenible.
* **Framework:** **Express** para la gestión de rutas y middleware.
* **Base de Datos:** **MongoDB** con **Mongoose** para la persistencia de datos.
* **Validación de Datos:** **Zod** para asegurar la integridad de las entradas (inputs).
* **Seguridad:** * **bcryptjs** para el hashing de contraseñas.
    * **JWT (JSON Web Tokens)** para la protección de rutas.
    * **CORS** habilitado para solicitudes externas.
* **Arquitectura:** Patrón **MVC** (Modelo-Vista-Controlador).

## 🛠️ Funcionalidades Implementadas
* **Autenticación:** Registro y Login con protección de rutas mediante JWT.
* **CRUD de Productos:** Gestión completa (Crear, Leer, Actualizar, Eliminar).
* **Manejo de Errores:** Control de excepciones mediante bloques **try/catch** en todos los controladores.
* **Validación Robusta:** Uso de esquemas de Zod para validar el cuerpo de las peticiones (Body).

## 🔍 Requisito de Investigación: Query Params
Cumpliendo con el requisito adicional de la Diplomatura, investigué e implementé un sistema de **filtrado mediante Query Params**:

* **Filtrado por Precio Máximo:** Uso del operador `$lte` para buscar productos por debajo de un costo específico.
* **Búsqueda por Nombre:** Implementación de `$regex` para búsquedas flexibles que ignoran mayúsculas/minúsculas.
* **Filtrado por Categoría:** Recuperación de productos según su etiqueta de categoría.

## 📁 Estructura del Proyecto
* `/controllers`: Lógica de negocio y manejo de peticiones.
* `/models`: Esquemas de Mongoose para la base de datos.
* `/routes`: Definición de endpoints de la API.
* `/validators`: Esquemas de validación con **Zod**.
* `/middleware`: Protección