A ready template for a quick start with react. 🚀

[Demo](https://start.aionchain.co/)

---

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

## Features

- 🌙 Dark Mode (DARK, LIGHT)
- 🎨 Template Color (YELLOW, BLUE, GREEN, RED, PURPLE)
- 📥 Header Types (STATIC, FIXED, HIDE, ELEVATE)
- 📍 Scroll to Top
- 📱 PWA
- 🔑 Authentication Types (WEB1, WEB3)

## How to Edit

1. Clone the project
2. Edit `Home.js` & `Page1.js` (or add other Pages) in `Client\src\Content\Screens` path
3. Modify (or add) name of your pages in: \
   3.1. Main.js (`Client\src\Content`) for routing. \
   3.2. ListItems.js (`Client\src\Content\Header\Drawer`) for Show in Menu.
4. Modify values of .env file

```
 ** Only modify files of `Content` folder (client\src\Content), .env file & index.html. **
```

##### Default Values of .env file:

```
REACT_APP_THEM_MODE="DARK"          >>  DARK or LIGHT
REACT_APP_THEM_COLOR="PURPLE"       >>  YELLOW, BLUE, GREEN, RED or PURPLE
REACT_APP_HEADER_TYPE="STATIC"      >>  STATIC, FIXED, HIDE or ELEVATE
REACT_APP_WALLET_TYPE= "WEB1"       >>  WEB1 or WEB3
```

## How to Run

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Demo

![demo](https://www.aionchain.co/github/main.jpg)

> Light

![light](https://www.aionchain.co/github/light.jpg)

> Dark

![dark](https://www.aionchain.co/github/dark.jpg)
