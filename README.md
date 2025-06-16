# 🔑 SecureFlow: Modern Authentication Template

Unlock secure and seamless authentication for your projects with SecureFlow! This template provides a robust foundation for user authentication, combining cutting-edge technologies and best practices.

## ✨ Description

SecureFlow is designed to streamline the implementation of authentication in your applications. It includes both Go (Fiber) and Node.js (Express) servers, along with a Next.js client, offering a comprehensive solution for modern web development.

## 🚀 Installation

Get started with SecureFlow in just a few steps:

- **Clone the Repository**:

  ```bash
  git clone https://github.com/onosejoor/auth-template.git
  cd auth-template
  ```

- **Install Dependencies**:

  For the client:

  ```bash
  cd client
  npm install
  cd ..
  ```

  For the Node.js server (if applicable):

  ```bash
  cd node_server
  npm install
  cd ..
  ```

  For the Go server (if applicable):

  ```bash
  cd go_server
  go mod tidy
  cd ..
  ```

- **Configure Environment Variables**:
  - Copy `.env.example` to `.env` in both `go_server` and `client` directories.
  - Fill in the required variables:
    - `MONGODB_URL`: Your MongoDB connection string.
    - `JWT_SECRET`: Secret key for JWT.
    - `ACCESS_SECRET`: Secret key for access tokens.
    - `SERVER_URL`: The URL of your backend server.
    - `ENVIRONMENT`: Set to `production` for production environments.

## 💻 Usage

### Running the Application

- **Client**:

  ```bash
  cd client
  npm run dev
  ```

- **Node.js Server**:

  ```bash
  cd node_server
  npm run dev
  ```

- **Go Server**:
  ```bash
  cd go_server
  go run main.go
  ```

### Access the Application

1.  Open your web browser.
2.  Navigate to `http://localhost:3000` (or the port specified by your client configuration).
3.  You can now sign up, sign in, and access the profile page

## 🌟 Features

- 🛡️ **Secure Authentication**: Robust sign-up, sign-in, and OAuth flows.
- 🔑 **JWT Handling**: Secure handling of JSON Web Tokens for session management.
- 🌐 **Cross-Origin Support**: CORS configured for seamless communication between client and server.
- 🚦 **Middleware**: Authentication middleware to protect routes.
- ⚙️ **Validation**: Data validation to ensure clean and secure data handling.
- ⚡ **Dual Server Options**: Choose between Go (Fiber) and Node.js (Express) for your backend.
- 🎨 **Modern UI**: Uses Radix UI and Tailwind CSS for a sleek, modern user interface.

## 🛠️ Technologies Used

| Technology     | Description                                      | Link                                          |
| :------------- | :----------------------------------------------- | :-------------------------------------------- |
| TypeScript     | Primary language for client and Node.js server   | [TypeScript](https://www.typescriptlang.org/) |
| Next.js        | React framework for the client                   | [Next.js](https://nextjs.org/)                |
| Go             | Backend server language option                   | [Go](https://go.dev/)                         |
| Fiber          | Go web framework (if Go server chosen)           | [Fiber](https://gofiber.io/)                  |
| Node.js        | Backend server language option                   | [Node.js](https://nodejs.org/)                |
| Express        | Node.js web framework (if Node.js server chosen) | [Express](https://expressjs.com/)             |
| MongoDB        | Database for user data                           | [MongoDB](https://www.mongodb.com/)           |
| Radix UI       | Set of accessible UI primitives                  | [Radix UI](https://www.radix-ui.com/)         |
| Tailwind CSS   | Utility-first CSS framework                      | [Tailwind CSS](https://tailwindcss.com/)      |
| Zod            | Schema validation                                | [Zod](https://zod.dev/)                       |
| JSON Web Token | Industry standard for secure authentication      | [JWT](https://jwt.io/)                        |

## 🎉 Contributing

We welcome contributions to SecureFlow! Here's how you can help:

- 🐛 **Report Bugs**: Submit detailed bug reports to help us improve.
- 💡 **Suggest Features**: Share your ideas for new features and enhancements.
- 🛠️ **Submit Pull Requests**: Contribute code by submitting pull requests.

Please follow these guidelines:

- Ensure your code adheres to the project's coding standards.
- Provide clear and concise commit messages.
- Test your changes thoroughly.

## CHANGELOG

Refer to the [CHANGELOG](./CHANGELOG.md) for the changelogs


## 👨‍💻 Author Info

- **Onos Ejoor**

  - Website: [https://onos-ejoor.vercel.app](https://onos-ejoor.vercel.app)
  - Twitter: [@DevText16](https://twitter.com/DevText16)
  - GitHub: [onosejoor](https://github.com/onosejoor)

## 🛡️ Badges

[![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)](https://go.dev/)
[![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NextJS](https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
