# 🔐 Auth Template - Node.js Server

An authentication and authorization template built with Node.js, Express, and MongoDB. This template provides a solid foundation for user registration, login, and session management using JWT.

## ✨ Features

- 🚀 **User Authentication:** Secure signup and sign-in functionality.
- 🛡️ **Middleware Validation:** Input validation using Zod schemas.
- 🔑 **JWT Session Management:** Session creation and cookie handling with JWT.
- 🔒 **Password Hashing:** Secure password storage using bcrypt.
- 📝 **Request Logging:** Logging middleware for request details.
- 🚨 **Error Handling:** Centralized error handling middleware.
- ⚙️ **Configuration:** Environment variable configuration using dotenv.

## 📦 Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/onosejoor/auth-template.git
   cd auth-template/node-server
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```
     PORT=8080
     MONGODB_URI=<Your MongoDB Connection String>
     JWT_SECRET=<Your JWT Secret Key>
     NODE_ENV=development
     ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```

## ⚙️ Environment Variables

| Variable      | Description                      | Example                             |
| ------------- | -------------------------------- | ----------------------------------- |
| `PORT`        | The port the server will run on. | `8080`                              |
| `MONGODB_URI` | MongoDB connection string.       | `mongodb://localhost:27017/auth-db` |
| `JWT_SECRET`  | Secret key for JWT encryption.   | `your-super-secret-key`             |
| `NODE_ENV`    | Environment mode.                | `development` or `production`       |

## 🚀 API Documentation

### Base URL

```
/auth
```

### Endpoints

#### POST /auth/signup

**Request**:

```json
{
  "email": "user@example.com",
  "username": "unique_username",
  "password": "securePassword"
}
```

**Response**:

```json
{
  "success": true,
  "message": "User created successfully"
}
```

**Errors**:

- 400: Invalid data (Zod validation errors)
- 409: Email or username already exists.

#### POST /auth/signin

**Request**:

```json
{
  "email": "user@example.com",
  "password": "securePassword"
}
```

**Response**:

```json
{
  "success": true,
  "message": "User created successfully"
}
```

**Errors**:

- 404: Email does not exist.
- 400: Incorrect password.

## 🛠️ Technologies Used

| Technology                | Purpose                                     |
| ------------------------- | ------------------------------------------- |
| Node.js                   | Runtime environment                         |
| Express                   | Web framework                               |
| TypeScript                | Programming language                        |
| MongoDB                   | Database                                    |
| Mongoose                  | ODM (Object-Document Mapper)                |
| Zod                       | Schema validation                           |
| bcryptjs                  | Password hashing                            |
| jsonwebtoken              | JSON Web Token for authentication           |
| dotenv                    | Load environment variables from .env file   |
| helmet                    | Secure Express apps by setting HTTP headers |
| pino                      | Logging library                             |
| unique-username-generator | Generates unique usernames from email       |

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🧑‍💻 Author Info

- Author: Onos
  - [GitHub](https://github.com/onosejoor)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
