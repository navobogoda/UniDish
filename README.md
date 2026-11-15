<div align="center">

# 🍽️ UniBite

### University Canteen Food App

Browse campus food, save favourites, and manage a demo order — even offline.

</div>

---

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Objective](#-objective)
- [Key Features](#-key-features)
- [Application Screenshots](#-application-screenshots)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation and Setup](#-installation-and-setup)
- [Offline and Data Storage](#-offline-and-data-storage)
- [Important Notes](#-important-notes)

## 📌 Project Overview

UniBite is a React Native application for browsing food available at a university canteen. Students can search and filter dishes, view food details, save favourites, add items to a cart, and review demo orders.

The menu is stored locally in the application. Saved dishes, cart items, and demo orders are stored on the device.

## 🎯 Objective

The objective of UniBite is to provide students with a simple way to explore campus canteen food and manage a sample order from a mobile application.

## ✨ Key Features

- Browse food items from the local menu.
- Search by food name or canteen.
- Filter dishes by category.
- Show vegetarian dishes only.
- View food descriptions, ingredients, prices, and canteen details.
- Save and remove favourite dishes.
- Add food to the cart and change item quantities.
- Review a demo order and see order history.
- Use the application without public APIs or an online database.

## 📱 Application Screenshots

Add your own screenshots to the `screenshots` folder in the project root.

| Home | Menu |
|---|---|
| ![UniBite Home screen](screenshots/home.png) | ![UniBite Menu screen](screenshots/menu.png) |

| Food Details | Cart |
|---|---|
| ![UniBite Food Details screen](screenshots/food-details.png) | ![UniBite Cart screen](screenshots/cart.png) |

## 🧰 Technologies Used

- **React Native** — mobile application interface
- **Expo** — development and application tooling
- **JavaScript and JSX** — application code
- **Expo Router** — screen routing and navigation
- **AsyncStorage** — local storage for saved dishes, cart items, and demo orders
- **React Native Web** — browser preview

## 🗂️ Project Structure

```text
UniBite/
├── app/
│   ├── _layout.jsx
│   ├── index.jsx
│   ├── about.jsx
│   ├── checkout.jsx
│   ├── food/
│   │   └── [id].jsx
│   └── tabs/
│       ├── _layout.jsx
│       ├── index.jsx
│       ├── menu.jsx
│       ├── saved.jsx
│       ├── cart.jsx
│       └── orders.jsx
├── components/
│   └── FoodCard.jsx
├── context/
│   └── StoreContext.jsx
├── data/
│   └── foods.js
├── screenshots/
├── package.json
└── README.md
