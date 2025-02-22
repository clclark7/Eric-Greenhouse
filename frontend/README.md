# Greenhouse Real-time Observation and Watering (GROW) - Frontend

This repository contains the frontend code for the GROW system, a real-time monitoring and management solution for greenhouse environmental conditions. The system integrates sensors, wireless communication, and a user-friendly dashboard to track and control key parameters such as soil moisture, temperature, humidity, and water levels.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Linting & Formatting](#linting-formatting)
- [Storybook](#storybook)

## Project Structure

```
frontend/
├── src/
│   ├── assets/                   # Static assets like images, fonts, etc.
│   ├── components/               # Reusable components like buttons, forms, etc.
│   ├── pages/                    # Pages of the web app
│   ├── styles/                   # Global styles (CSS, PostCSS, Tailwind)
│   ├── App.tsx                   # Main application entry point
│   ├── main.tsx                  # Initializes and renders the app
│   └── ...
├── public/                       # Public assets (index.html, etc.)
├── tests/                     # Unit and integration tests
├── .eslintrc.json                 # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite configuration
```

## Setup Instructions

1. Clone this repository to your local machine:

   ```bash
   git clone <repo-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd grow-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Technologies Used

- **React** - Frontend framework for building the user interface.
- **TypeScript** - Typed superset of JavaScript for better tooling and reliability.
- **Vite** - Build tool and development server.
- **Mantine** - UI components and hooks for building the dashboard interface.
- **Tailwind CSS** - Utility-first CSS framework for responsive and customizable styling.
- **PostCSS** - CSS transformation tool for working with Tailwind.
- **Vitest** - Testing framework used for unit and integration tests.
- **React Router** - For navigation between different views or pages in the app.
- **Storybook** - Tool for building UI components in isolation for development.

## Running the App

To start the development server, run:

```bash
npm run dev
```

This will spin up a local server and open the app in your default browser at `http://localhost:3000`.

## Testing

To run tests for the project, use the following command:

```bash
npm run test
```

For test coverage:

```bash
npm run coverage
```

You can write tests under the `__tests__` directory located in the `pages` and `components` folders.

## Linting & Formatting

This project uses ESLint and Prettier for linting and code formatting. To lint the codebase, run:

```bash
npm run lint
```

To format the code with Prettier, run:

```bash
npm run format
```

These checks are also automatically run before committing using Husky hooks.

## Storybook

Storybook is used for developing and testing UI components in isolation. To start Storybook, run:

```bash
npm run storybook
```

Storybook will run on `http://localhost:6006`.

To build the Storybook static files:

```bash
npm run build-storybook
```
