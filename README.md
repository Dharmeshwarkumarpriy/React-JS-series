# React-JS-series
React JS series

This project was created to help you develop your web applications using React JS.

## Features

- Component-based architecture for building interactive UIs.
- Fast reloading powered by the React development server.
- Built-in support for modern JavaScript features.

## Technologies Used

- **Frontend:** [React.js](https://reactjs.org/)
- **Runtime:** [Node.js](https://nodejs.org/)

## Troubleshooting

### PowerShell Execution Policy Error
If you encounter an error stating that "running scripts is disabled on this system" when trying to create a project, you can fix it by opening PowerShell as an administrator and running:

```powershell
Set-ExecutionPolicy Unrestricted
Build Error (ENOENT)
If you see an ENOENT error during a build, ensure that your project folder has all the necessary source files in the src folder and that your package.json has the correct scripts defined.

Installation
Follow these steps to set up the project on your machine:

Clone the repository (if applicable) or create your React app using:

Bash
npx create-react-app my-app
Navigate to the project directory:

Bash
cd my-app
Install the dependencies:

Bash
npm install
Usage
To start the development server, use the following command:

Bash
npm start
To stop the development server while it is running in the terminal, press:

Plaintext
Ctrl + C
To create a production-ready build of your project, run:

Bash
npm run build

###################

# React + Vite Project

A fast, modern React web application built using Vite.

## Features

- **Blazing Fast HMR:** Hot Module Replacement that stays fast regardless of app size.
- **Vite Bundler:** Optimized production builds using Rollup.
- **Component Architecture:** Scalable structural pattern for React components.

## Technologies Used

- **Frontend:** [React.js](https://reactjs.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Runtime Environment:** [Node.js](https://nodejs.org/)

---

## Troubleshooting & Fixes

### 1. PowerShell Script Execution Error
If you face an error like `running scripts is disabled on this system` while running `npx` or `npm` tools, fix it by opening PowerShell as **Administrator** and running:

```powershell
Set-ExecutionPolicy Unrestricted
Type A (Yes to All) when prompted. You can verify it by running Get-ExecutionPolicy.

2. Build Error (ENOENT / Code -4058)
If npm run build fails with an ENOENT (File or Directory Not Found) error, check the following:

Make sure you are inside the correct project root directory where package.json exists.

Ensure the index.html and src folder locations haven't been altered incorrectly (Vite expects index.html at the root, not inside public).

Installation & Setup
Follow these steps to set up the project locally:

Create the Project (if starting fresh):

Bash
npm create vite@latest my-vite-app -- --template react
Navigate to the Project Directory:

Bash
cd my-vite-app
Install Dependencies:

Bash
npm install
Available Scripts
In the project directory, you can run the following commands:

Start Development Server
Bash
npm run dev
Runs the app in development mode. Open http://localhost:5173 to view it in your browser.

Stop the Server
To stop the running local server at any time in your terminal, press:

Plaintext
Ctrl + C
Build for Production
Bash
npm run build
Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Preview Production Build
Bash
npm run preview
Locally previews the production build created by the build script.