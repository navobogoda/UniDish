# UniBite - University Canteen App

## Project Overview

UniBite is a React Native application for browsing food available at a university canteen. Students can search and filter the menu, view dish details, save favourites, add dishes to a cart, and review demo orders. The menu data and saved app information are stored locally so the app can be used offline.

## Run it

Install Node.js LTS, then open a terminal in this folder and run:

```bash
npm install
npx expo start
```

Install Expo Go on an Android phone and scan the development QR code, or press `a` if an Android emulator is installed. For web preview, run `npm run web`.

## Where to start editing

- `data/foods.ts`: the sample local menu. Replace it with information you personally collected and prepared. Keep each `id` unique.
- `app/(tabs)/menu.tsx`: local search, food category filter, and vegetarian filter.
- `app/food/[id].tsx`: dynamic details screen, ingredients, save, and add-to-cart actions.
- `context/StoreContext.tsx`: local cart, favourites, local demo orders, and AsyncStorage persistence.
- `app/(tabs)/_layout.tsx`: bottom-tab navigation.

The included dishes and prices are illustrative sample content, not verified prices for a real university. Confirm your own dataset with your lecturer and use your own observations and any required attribution. Personalize the screens and be prepared to explain the code as your individual work. An offline demo checkout only saves an example order on this device; it does not send an order to a canteen.

## ICA coverage in this starter

- Expo React Native app with multiple navigable screens.
- Local, bundled sample food dataset displayed dynamically.
- Search, category and vegetarian filters, food details, favourites and cart.
- AsyncStorage persistence for the cart, saved dishes and demo orders.
- All app content and imagery are local (food emoji); no internet service is called by the app.

Before submission, replace the sample dataset with your own, add your student-specific project details if required, create your own GitHub repository, and commit your development work regularly.
