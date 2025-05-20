# Smart Garbage Bin System UI

An interactive React.js dashboard for the IoT-enabled Smart Garbage Bin System, providing real-time monitoring and management of waste bins.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

- **Real-Time Monitoring**: Live updates on bin status, including fill level, temperature, humidity, and access logs.
- **Automated Alerts**: Email notifications when bins reach capacity or critical conditions are detected.
- **Secure Access**: RFID-based access logging for authorized waste disposal.
- **Responsive Dashboard**: Optimized for both desktop and mobile viewing.

## Tech Stack

- **React.js** for frontend UI
- **JavaScript**, **HTML5**, **CSS3**
- **Node.js** and **npm** for development tooling

## Prerequisites

- **Node.js** v14+ and **npm** v6+ installed on your machine
- Access to the backend API or Google Apps Script endpoint for data storage and notifications

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/nrakshitha1611/SmartBinSystem.git
    cd SmartBinSystem/my-smart-dustbin-ui
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the `my-smart-dustbin-ui` directory:
    ```bash
    cp .env.example .env
    ```
2. Update the following environment variable in `.env`:
    ```ini
    REACT_APP_API_URL=https://your-backend-endpoint-url
    ```
   - Replace `https://your-backend-endpoint-url` with the URL of your data API or Google Apps Script endpoint.

## Available Scripts

In the project directory, you can run:

- `npm start` – Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
- `npm run build` – Builds the app for production into the `build` folder

## Deployment

1. Build the production bundle:
    ```bash
    npm run build
    ```
2. Deploy the contents of the `build` folder to your preferred hosting service (e.g., Firebase Hosting, Netlify, GitHub Pages).

## Project Structure

```plaintext
SmartBinSystem/
├── my-smart-dustbin-ui/      # React frontend application
│   ├── public/               # Static assets and HTML template
│   ├── src/                  # React components and styles
│   ├── .env.example          # Example environment variables file
│   ├── package.json          # Project metadata and dependencies
│   └── README.md             # Frontend-specific instructions
└── README.md                 # Project-wide README (this file)
```
## Contact

For questions or feedback, contact **Rakshitha Nagaraj** at _nrakshitha.1611@gmail.com_.
