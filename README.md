# Media Search Collection App

This project is a simple web application built with **React** and **Redux Toolkit** to solidify understanding of state management using Redux Toolkit. The app allows users to search for any media (photos, videos, or GIFs) through public APIs, view the fetched media, and save their favorite items in a collection.

## Features

- 🔎 **Search Media:** Search for photos, videos, or GIFs using an API by entering your desired keyword.
- 💾 **Save to Collection:** Easily save your favorite media items to your personal collection.
- 🗑️ **Clear Collection:** Remove all items from your collection with a single click.
- 🗃️ **Redux Toolkit:** State management (search results, collection) is handled using Redux Toolkit for efficiency and scalability.
- 🎉 **Modern UI:** Built using React with a clean and minimal design.

## Why This Project?

This project is intended as a hands-on approach to learning and practicing Redux Toolkit. By working with real API data and using Redux for state management, it offers practical experience managing side effects and application state in React.

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the required environment keys (see below).
4. Start the development server:
   ```bash
   npm start
   ```

## Required Environment Keys

Copy the following keys into your `.env` file and fill in your API key values:

```
VITE_UNSPLASH_KEY=
VITE_TENOR_KEY=
VITE_PEXELS_KEY=
```

> _**Note:** Do **NOT** commit your real API key values. Only keep the key names in your public docs._

## Folder Structure

- `src/pages/` – Main React pages (e.g. Collection Page)
- `src/components/` – Reusable UI components (e.g. Navbar, CollectionCard)
- `src/redux/` – Redux logic (features and store)
- `src/` – Other application logic

## License

This project is for educational purposes. You are free to use, modify, and share for learning!

