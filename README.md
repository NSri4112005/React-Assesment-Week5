A simple and user-friendly Product Store web application built using React and Vite.s The application gets product information from the Fake Store API and provides options to search, filter, sort, and view product details.

## Features

* Display products with image, title, price, category, and rating
* Search products by title
* Filter products by category
* Sort products by price and rating
* View complete product details
* Show loading message while products are being loaded
* Handle API errors
* Show a message when no products are found
* Responsive layout for different screen sizes

## Technologies Used

* React
* Vite
* JavaScript
* CSS
* React Router
* Fake Store API
* Git and GitHub

## API

This project uses the Fake Store API to get product information.

API used:

https://fakestoreapi.com/products

For individual product details:

https://fakestoreapi.com/products/:id

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NSri4112005/React-Assesment-Week5.git
```

### 2. Open the project

```bash
cd React-Assesment-Week5
```

### 3. Install the required packages

```bash
npm install
```

### 4. Start the application

```bash
npm run dev
```

After running the command, open the local URL shown in the terminal.

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── ProductList.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   └── SortFilter.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## What I Learned

While building this project, I practiced React concepts such as components, props, state management using `useState`, API calls using `useEffect`, event handling, conditional rendering, and React Router. I also practiced using Git branches, commits, and GitHub for project management.
