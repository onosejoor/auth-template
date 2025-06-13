# ✨ Auth Template Generator ✨

Generate authentication templates for your projects with ease! This tool provides ready-to-use authentication setups, saving you valuable development time.

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/onosejoor/auth-template.git
    cd auth-template
    ```
2.  **Install Dependencies**:
    - Navigate to the `client` directory:
      ```bash
      cd client
      npm install
      ```
    - Go back to the root directory and navigate to the `node_server` directory:
      ```bash
      cd ..
      cd node_server
      npm install
      ```
3.  **Set Up Environment Variables**:
    - In the `client` directory, create a `.env.local` file:
      ```bash
      touch .env.local
      ```
    - Add the following environment variables:
      ```
      JWT_SECRET=<YOUR_JWT_SECRET>
      SERVER_URL=http://localhost:8080
      ```
    - In the `node_server` directory, create a `.env` file:
      ```bash
      touch .env
      ```
    - Add the following environment variables:
      ```
      PORT=8080
      MONGODB_URI=<YOUR_MONGODB_URI>
      JWT_SECRET=<YOUR_JWT_SECRET>
      ```
4.  **Run the Development Servers**:
    - In the `client` directory:
      ```bash
      npm run dev
      ```
    - In the `node_server` directory:
      ```bash
      npm run dev
      ```

## ⚙️ Usage

Detailed instructions for using the authentication templates.

 <details>
  <summary>Client (Next.js)</summary>
  
  1.  **Navigate to the Client Directory**:
  ```bash
  cd client
  ```
  2.  **Start the Development Server**:
  ```bash
  npm run dev
  ```
  3.  **Access the Application**:
  - Open your browser and go to `http://localhost:3000`.
  4.  **Explore the Authentication Flow**:
  - **Sign Up**: Click on "Sign Up" to create a new account.
  - **Sign In**: Click on "Sign In" to log in with existing credentials.
  - **Profile**: Access the profile page after signing in.
  
  
 </details>


 <details>
  <summary>Node.js Server</summary>


1.  **Navigate to the Server Directory**:

```bash
cd node_server
```

2.  **Start the Development Server**:

```bash
npm run dev
```

3.  **API Endpoints**:

- **POST** `/auth/signup`: Registers a new user.
- **POST** `/auth/signin`: Signs in an existing user.
- **POST** `/auth/oauth`: Handles OAuth authentication.

4.  **Database**:

- Ensure your MongoDB instance is running and the `MONGODB_URI` environment variable is correctly set.
</details>


## ✨ Features

- 🔑 **Authentication**: Ready-to-use sign-up and sign-in components.
- 🛡️ **Middleware**: Protected routes to secure your application.
- 🎨 **UI Components**: Modern UI components for a seamless user experience.
- 🌐 **Backend**: Pre-configured Node.js and Go servers with authentication endpoints.

## 🛠️ Technologies Used

| Technology   | Description                                    | Link                                                               |
| :----------- | :--------------------------------------------- | :----------------------------------------------------------------- |
| TypeScript   | Primary language for client and Node.js server | [https://www.typescriptlang.org/](https://www.typescriptlang.org/) |
| Next.js      | React framework for the client                 | [https://nextjs.org/](https://nextjs.org/)                         |
| Node.js      | Backend runtime environment                    | [https://nodejs.org/](https://nodejs.org/)                         |
| Express      | Web framework for Node.js server               | [https://expressjs.com/](https://expressjs.com/)                   |
| Go           | Backend language alternative                   | [https://go.dev/](https://go.dev/)                                 |
| Fiber        | Web framework for Go server                    | [https://gofiber.io/](https://gofiber.io/)                         |
| MongoDB      | Database for storing user data                 | [https://www.mongodb.com/](https://www.mongodb.com/)               |
| Tailwind CSS | CSS framework for styling                      | [https://tailwindcss.com/](https://tailwindcss.com/)               |
| Shadcn/ui    | Re-usable components                           | [https://ui.shadcn.com/](https://ui.shadcn.com/)                   |
| Zod          | Schema validation                              | [https://zod.dev/](https://zod.dev/)                               |

## 🤝 Contributing

Contributions are welcome! Here’s how you can contribute:

- 🐛 **Report Bugs**: Submit detailed bug reports to help improve the project.
- 💡 **Suggest Enhancements**: Share your ideas for new features or improvements.
- 💻 **Submit Pull Requests**: Contribute code by submitting pull requests.

## 📜 License

This project is under the [MIT License](LICENSE).

## 🧑 Author Info

- Name: Onos Ejoor
  - GitHub: [https://github.com/onosejoor/](https://github.com/onosejoor/)
- Twitter: [https://twitter.com/DevText16](https://twitter.com/DevText16)
- Website: [https://onos-ejoor.vercel.app](https://onos-ejoor.vercel.app)

## 🛡️ Badges

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)](https://go.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
