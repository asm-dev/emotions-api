# Emotions Journal API

<p align="center">
  <img src="./assets/emotion_api_logo.png" width="200" alt="Emotion API Logo" />
</p>

This REST API allows you to create, query, update and delete emotions associated with authenticated users. Its purpose is to provide a functional backend structure for managing emotional experiences, useful as a foundation for personal journals, wellness systems or mental health applications.

Implementing this API has allowed me to dive deeper into several key concepts of backend development with Node.js and Express. For example, modular architecture, which makes it possible to clearly divide the code into layers (controllers, services, middlewares...), favoring maintainability and scalability.

Regarding security, JWT authentication has been applied, along with protection of critical routes and data validation with Joi to avoid unexpected inputs. A logging middleware has also been integrated that records every request without needing external libraries, imitating real backend environments. Although persistence is simulated using JSON files, the design and best practices can easily be extrapolated to solutions with real databases.

## Available endpoints

| Method | Route               | Description                        | Protected |
| ------ | ------------------- | ---------------------------------- | --------- |
| POST   | `/login`            | Authentication and token retrieval | NO        |
| GET    | `/api/emotions`     | List all emotions                  | NO        |
| GET    | `/api/emotions/:id` | Get an emotion by ID               | NO        |
| POST   | `/api/emotions`     | Create a new emotion               | YES       |
| PUT    | `/api/emotions/:id` | Update an existing emotion         | YES       |
| DELETE | `/api/emotions/:id` | Delete an emotion                  | YES       |

## Installation and execution

1. Clone the repository locally.
2. Install the dependencies with `npm install`
3. Configure the environment variables by renaming the `.env.example` file to `.env`. In it you will find commented instructions to fill it in correctly, including the command to generate the secret key for the JWT token.
4. Run the server with `node server.js`

## How to test it

First you need to **obtain a valid token** through a `POST /login` request (which you can make in Postman, Insomnia, Bruno, RapidAPI, etc.) with a user included in the `data/users.json` file, for example:

```json
{
  "username": "maripili",
  "password": "123456"
}
```

Once you have retrieved it from the response, you can **use the token** to access the protected routes. You must include it in the header of your requests to `/api/emotions`

## Future improvements

Although the project meets all the defined functional goals, there are several possible lines of improvement: automated testing with Jest to ensure stability, integration with a real database such as MongoDB or PostgreSQL for advanced persistence, and the development of a frontend interface (for example, in React) to interact visually with the API. Pagination, filters by emotion or date, and management of multiple users with differentiated permissions could also be added.
