# ng-training-Assignment-1
To_Do_List Application

# Running a React App in VS Code with npm start and JSON Server

## Table of Contents

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Step 1: Install Required Packages](#step-1-install-required-packages)
* [Step 2: Start the JSON Server](#step-2-start-the-json-server)
* [Step 3: Configure the React App](#step-3-configure-the-react-app)
* [Step 4: Start the React App](#step-4-start-the-react-app)
* [A4 Size Description](#a4-size-description)
* [Example Use Case](#example-use-case)
* [Troubleshooting Tips](#troubleshooting-tips)
* [Additional Configuration Options](#additional-configuration-options)
* [Common Errors and Solutions](#common-errors-and-solutions)
* [Conclusion](#conclusion)

## Introduction

This documentation provides a step-by-step guide on how to run a React app in VS Code with npm start and connect it to a JSON server.

## Prerequisites

* Node.js installed on your machine
* npm installed on your machine
* VS Code installed on your machine
* A React app created using create-react-app

## Step 1: Install Required Packages

Open your terminal in VS Code and navigate to your project directory. Install the required packages by running the following command:

```bash
npm install


# JSON Server with React Proxy Setup

This project demonstrates how to set up a JSON Server to serve data and proxy requests from a React app.

## Steps to Run

### Step 1: Install Dependencies
First, make sure you have [Node.js](https://nodejs.org/) installed.

Run the following command to install the necessary package for the JSON server:

```bash
npm install json-server
Step 2: Start the JSON Server
Run the following command to start the JSON Server on port 8081 and watch for changes in the db.json file:

bash
Copy code
json-server --watch db.json --port 8081
Step 3: Configure the React App Proxy
In your React app, create a new file called setupProxy.js in the root directory. Add the following code to it:

javascript
Copy code
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/tasks',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true,
    })
  );
};
This will proxy any requests made to /tasks in the React app to the JSON server running on port 8081.

Step 4: Start the React App
Run the following command to start your React app in development mode:

bash
Copy code
npm start
Project Structure
db.json: A mock database used by JSON Server.
setupProxy.js: Proxy setup to forward requests from the React app to the JSON server.
React App: The client-side application interacting with the JSON server.
