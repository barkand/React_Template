A ready template for a quick start with react. 🚀

[![GitHub Pages](https://github.com/barkand/React_Template/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/barkand/React_Template/actions/workflows/build-deploy.yml)

[Demo](https://barkand.github.io/React_Template/)

---

## ✨ Features

- 🌙 Dark Mode: [DARK, LIGHT]
- 🎨 Template Color: [YELLOW, BLUE, GREEN, RED, PURPLE, GREY]
- 📥 Header Types: [STATIC, FIXED, HIDE, ELEVATE]
- 📍 Scroll to Top
- 📱 PWA
- 🔒️ Authentication Types: [WEB3, OAUTH, EMAIL, MOBILE]
- 💾 Database Types: [MONGO, MARIA, POSTGRES]
- 👽️ API Types: [REST, GRAPHQL]
- 🤡 Mock Server (Mock API)
- 📊 Prometheus (Metrics)
- ✅ Test (Mocha, Chai, Jest)

---

## 📝 How to Edit

1. Clone the project
2. Edit `Home.js` & `Page1.js` (or add other Pages) in `Client\src\Content\Screens` path
3. Modify (or add) name of your pages in: \
   3.1. Main.js (`Client\src\Content`) for routing. \
   3.2. ListItems.js (`Client\src\Content\Header\Drawer`) for Show in Menu.
4. Modify values of .env file

```
 ** Only modify files of `Content` folder (client\src\Content), .env file & index.html. **
```

---

## ⚡️ How to Run

[![JavaScript Badge](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white&link=)]() [![React Badge](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white&link=)]() [![MUI Badge](https://img.shields.io/badge/-MUI-007FFF?style=flat-square&logo=MUI&logoColor=white&link=)]() [![web3dotjs Badge](https://img.shields.io/badge/-Web3.js-F16822?style=flat-square&logo=web3dotjs&logoColor=white&link=)]()

#### Frontend:

In the `client` directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##

##### Default Values of .env file:

```
REACT_APP_SERVER_URL=""             >>  Empty String for Mock Web Server or
                                    >>  Input Your Server Address for Real Server
REACT_APP_THEM_MODE="DARK"          >>  DARK or LIGHT
REACT_APP_THEM_COLOR="PURPLE"       >>  YELLOW, BLUE, GREEN, RED, PURPLE or GREY
REACT_APP_HEADER_TYPE="STATIC"      >>  STATIC, FIXED, HIDE or ELEVATE
REACT_APP_AUTH_TYPE="WEB3"          >>  WEB3, OAUTH, EMAIL or MOBILE
```

---

[![JavaScript Badge](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white&link=)]() [![Express Badge](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=Express&logoColor=white&link=)]() [![GraphQL Badge](https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white&link=)]() [![ApolloGraphql Badge](https://img.shields.io/badge/-Apollo-311C87?style=flat-square&logo=ApolloGraphql&logoColor=white&link=)]()
[![Docker Badge](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white&link=)]() [![Prometheus Badge](https://img.shields.io/badge/-Prometheus-E6522C?style=flat-square&logo=Prometheus&logoColor=white&link=)](https://github.com/barkand/Docker_DE/blob/main/plg-docker-compose.yaml) [![Grafana Badge](https://img.shields.io/badge/-Grafana-663399?style=flat-square&logo=Grafana&logoColor=white&link=)](https://github.com/barkand/Docker_DE/blob/main/plg-docker-compose.yaml)

#### Backend:

If you want to run the Real Server, First edit the `.env` file (in client).

```
REACT_APP_SERVER_URL="http://localhost:4000"
```

<br/>

- #### `PROMATHEUS="false"`

  In the `server` directory, you can run:

  #### `npm start`

<br/>

- #### `PROMATHEUS="true"`

  For active Prometheus metrics on server, first run PLG docker compose:

  [PLG](https://github.com/barkand/Docker_DE/blob/main/plg-docker-compose.yaml)

  <br/>
  Then run `docker-compose.yml` in `server\docker`

<br/>

Now open [http://localhost:4000](http://localhost:4000) to view it in your browser.

---

[![Docker Badge](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white&link=)]() [![MariaDB Badge](https://img.shields.io/badge/-MariaDB-003545?style=flat-square&logo=MariaDB&logoColor=white&link=)](https://github.com/barkand/Docker_DE/blob/main/databases/mariadb-docker-compose.yml) [![MongoDB Badge](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white&link=)](https://github.com/barkand/Docker_DE/blob/main/databases/mongodb-docker-compose.yml) [![PostgreSQL Badge](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white&link=)](https://github.com/barkand/Docker_DE/blob/main/databases/postgres-docker-compose.yml)

#### Database:

You can use Docker to run the database.

[MongoDB](https://github.com/barkand/Docker_DE/blob/main/databases/mongodb-docker-compose.yml) | [MariaDB](https://github.com/barkand/Docker_DE/blob/main/databases/mariadb-docker-compose.yml) | [PostgrSQL](https://github.com/barkand/Docker_DE/blob/main/databases/postgres-docker-compose.yml)
