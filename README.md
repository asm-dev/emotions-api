# API Diario de emociones

<p align="center">
  <img src="./assets/emotion_api_logo.png" width="200" alt="Emotion API Logo" />
</p>

Esta API REST permite registrar, consultar, actualizar y eliminar emociones asociadas a usuarios autenticados. Su propósito es ofrecer una estructura backend funcional para gestionar experiencias emocionales, útil como base para diarios personales, sistemas de bienestar o aplicaciones de salud mental.

Implementar esta API me ha permitido profundizar en varios conceptos clave del desarrollo backend con Node.js y Express. Por ejemplo, la arquitectura modular, que permite dividir claramente el código en capas (controladores, servicios, middlewares...) favoreciendo la mantenibilidad y la escalabilidad.

En cuanto a la seguridad, se ha aplicado autenticación mediante JWT, protección de rutas críticas, y validación de datos con Joi para evitar entradas extrañas. También se ha integrado un middleware de logging que registra cada solicitud sin necesidad de bibliotecas externas, imitando entornos reales de backend. A pesar de que la persistencia se simula mediante archivos JSON, el diseño y las buenas prácticas son fácilmente extrapolables a soluciones con bases de datos reales.

## Endpoints disponibles

| Método | Ruta                | Descripción                        | Protegido |
| ------ | ------------------- | ---------------------------------- | --------- |
| POST   | `/login`            | Autenticación y obtención de token | NO        |
| GET    | `/api/emotions`     | Listar todas las emociones         | NO        |
| GET    | `/api/emotions/:id` | Obtener una emoción por ID         | NO        |
| POST   | `/api/emotions`     | Crear nueva emoción                | SÍ        |
| PUT    | `/api/emotions/:id` | Actualizar emoción existente       | SÍ        |
| DELETE | `/api/emotions/:id` | Eliminar emoción                   | SÍ        |

## Instalación y ejecución

1. Clona el repositorio en local.
2. Instala las dependencias con `npm install`
3. Configura las variables de entorno renombrando el archivo `.env.example` a `.env`. En él encontrarás instrucciones comentadas para completarlo correctamente, incluyendo el comando para generar la clave secreta del token JWT.
4. Ejecuta el servidor con `node server.js`

## Cómo probar la API

Primero tienes que **obtener un token válido** mediante una solicitud `POST /login` con un usuario incluido en el archivo `data/users.json`, por ejemplo:

```json
{
  "username": "maripili",
  "password": "123456"
}
```

Una vez recuperado de la response, podrás **usar el token** para habilitar las rutas protegidas. Has de incluirlo en el encabezado de tus peticiones a `/api/emotions`

## Futuras mejoras

Aunque el proyecto cumple con todos los objetivos funcionales definidos, hay varias líneas de mejora posibles: testeo automatizado con Jest para garantizar estabilidad, integración con una base de datos real como MongoDB o PostgreSQL para persistencia avanzada, y el desarrollo de una interfaz frontend (por ejemplo, en React) para interactuar visualmente con la API. También podría añadirse paginación, filtros por emoción o fecha, y gestión de múltiples usuarios con permisos diferenciados.
