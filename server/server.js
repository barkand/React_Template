const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet()); // protect from vulnerabilities
app.disable("x-powered-by"); // an extra layer of obscurity to reduce server fingerprinting

app.get("/", (req, res) => {
  res.send("/api");
});
app.get("/api", (req, res) => {
  res.send(
    `/${process.env.API_TYPE.toLowerCase()}/${process.env.API_VERSION.toLowerCase()}/`
  );
});

if (process.env.API_TYPE === "REST") {
  var apiRouter = require(`./api/rest/${process.env.API_VERSION.toLowerCase()}/routers`);
  app.use(`/api/rest/${process.env.API_VERSION.toLowerCase()}`, apiRouter);
} else {
  const { graphqlHTTP } = require("express-graphql");
  const schema = require(`./api/graphql/${process.env.API_VERSION.toLowerCase()}/schema`);

  app.use(
    `/api/graphql/${process.env.API_VERSION.toLowerCase()}`,
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
}

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🚀  Server is running on port ${process.env.SERVER_PORT}`);
});
