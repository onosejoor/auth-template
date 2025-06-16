# Auth Template: Streamlining Authentication for Modern Applications 🚀

A comprehensive authentication template designed to kickstart your projects with Go, Fiber, Node, Express, and Next.js.

## Overview

This project provides a robust foundation for implementing authentication in your applications. It includes both Go (with Fiber) and Node.js (with Express) server implementations, along with a Next.js client, offering flexibility and choice for your backend needs. Whether you're building a microservice architecture or a full-stack application, this template simplifies the process of setting up secure user authentication.

## Installation

Follow these steps to set up the project locally:

- **Clone the Repository**:

```bash
git clone https://github.com/onosejoor/auth-template.git
cd auth-template
```

- **Install dependencies**

```bash
cd go_server && go mod tidy
cd ../node_server && npm install
cd ../client && npm install
```

- **Environment Variables**:

Create `.env` files in both the `go_server` and `node_server` directories, populating them with the necessary environment variables (refer to the `.env.example` files). For the client, create `.env.local` with `JWT_SECRET` and `SERVER_URL`.

- **Running the Applications**:

```bash
# In separate terminals:
cd go_server && go run main.go
cd node_server && npm run dev
cd client && npm run dev
```

## Usage

1.  **Signup:** Navigate to the signup page to create a new account.
    ![Signup Form](https://i.imgur.com/YOUR_SIGNUP_FORM_SCREENSHOT.png)
2.  **Signin:** Use the signin page to log in with your existing credentials.
    ![Signin Form](https://i.imgur.com/YOUR_SIGNIN_FORM_SCREENSHOT.png)
3.  **Profile:** Access your profile page after successful authentication.

## Features

- **Dual Backend Support:** Choose between a Go-based (Fiber) or Node.js-based (Express) backend.
- **Next.js Client:** A modern and responsive user interface built with Next.js.
- **JWT Authentication:** Secure authentication using JSON Web Tokens.
- **Middleware:** Authentication middleware to protect routes.
- **Form Validation:** Utilizes Zod Schemas for robust form validation on the Node.js server.
- **Cookie-Based Sessions:** Secure session management using cookies.
- **OAuth Support:** Includes basic OAuth handler.

## Technologies Used

| Technology    | Description                                                        | Link                                                           |
| :------------ | :----------------------------------------------------------------- | :------------------------------------------------------------- |
| TypeScript    | Primary language for client and Node.js server                    | [TypeScript](https://www.typescriptlang.org/)                 |
| Go            | Backend server implementation                                      | [Go](https://go.dev/)                                         |
| Fiber         | Lightweight web framework for Go                                   | [Fiber](https://gofiber.io/)                                  |
| Node.js       | Backend runtime environment                                        | [Node.js](https://nodejs.org/)                                |
| Express       | Web application framework for Node.js                              | [Express](https://expressjs.com/)                             |
| Next.js       | React framework for building performant web applications          | [Next.js](https://nextjs.org/)                               |
| Mongoose      | MongoDB object modeling tool (Node.js)                             | [Mongoose](https://mongoosejs.com/)                           |
| MongoDB       | Database                                                           | [MongoDB](https://www.mongodb.com/)                           |
| Zod           | Schema validation library for TypeScript (Node.js)                 | [Zod](https://github.com/colinhacks/zod)                      |
| Radix UI      | Set of unstyled, accessible UI primitives                         | [Radix UI](https://www.radix-ui.com/)                          |
| Tailwind CSS  | Utility-first CSS framework                                        | [Tailwind CSS](https://tailwindcss.com/)                       |
| Axios         | Promise based HTTP client                                          | [Axios](https://axios-http.com/docs/intro)                     |
| bcryptjs      | Library for hashing passwords (Node.js)                            | [bcryptjs](https://www.npmjs.com/package/bcryptjs)             |
| jose          | JavaScript implementation of the JWT specification (Node.js)        | [jose](https://www.npmjs.com/package/jose)                     |
| lucide-react  | Beautifully simple, pixel-perfect icons for React                   | [lucide-react](https://lucide.dev/)                            |
| sonner        | Opinionated toast component for React                              | [sonner](https://sonner.emilkowalski.com/)                     |
| class-variance-authority        | Compose reusable, type-safe class variants in JavaScript + TypeScript | [class-variance-authority](https://cva.style/)             |
| commander      | Complete solution for node.js command-line interfaces      | [commander](https://www.npmjs.com/package/commander)             |
| @clack/prompts         | Beautifully designed command-line prompts | [@clack/prompts](https://www.npmjs.com/package/@clack/prompts)           |
| chalk     | Terminal string styling done right     | [chalk](https://www.npmjs.com/package/chalk)                   |

## Contributing

Contributions are welcome! Here's how you can help:

-   Report bugs 🐛.
-   Suggest new features ✨.
-   Submit pull requests 🛠️.

## License

This project is open source and available under the [MIT License](https://opensource.org/license/mit/).

## Changelog
refer to [ChangeLog](./CHANGELOG.md)

## Author Info

- Onos Ejoor
    - Website: [https://onos-ejoor.vercel.app](https://onos-ejoor.vercel.app)
    - Twitter: [@DevText16](https://twitter.com/DevText16)
    - GitHub: [onosejoor](https://github.com/onosejoor)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
