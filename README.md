# User Listing and Search Application

This project is a **React + Redux** web application that allows users to list, search, and view details about users using data from the [DummyJSON API](https://dummyjson.com/). Users can search for individuals by their name, and clicking on any user opens a modal displaying their full details.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the App](#running-the-app)

## Features

- **User List:** Displays a list of all users with their name, email, phone, and company information.
- **Search Functionality:** Users can search by first or last name using the search bar.
- **Modal Display:** Clicking on a user opens a modal showing more detailed information, including their company address, department, and title.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.

## Tech Stack

- **React:** Frontend library for building user interfaces.
- **Redux:** State management library for managing application state.
- **Redux Thunk:** Middleware for handling asynchronous actions in Redux.
- **Axios:** Promise-based HTTP client for making requests to the DummyJSON API.
- **CSS:** Custom styles for UI design and layout.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/hadvaniwork/user-listing-app.git
   cd user-listing-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://127.0.0.1:5173/
   ```
