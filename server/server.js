const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet()); // protect from vulnerabilities
app.disable("x-powered-by"); // an extra layer of obscurity to reduce server fingerprinting

// Promatheus Metrics
if (process.env.PROMETHEUS === "true") {
  const pino = require("pino");
  const expressPino = require("express-pino-logger");
  const promClient = require("prom-client");

  const logger = pino({ level: process.env.LOG_LEVEL });
  const expressLogger = expressPino({ logger });
  app.use(express.json(), expressLogger);

  const register = new promClient.Registry();
  promClient.collectDefaultMetrics({ register });

  // Create a counter metric
  const counter = new promClient.Counter({
    name: "http_requests_total",
    help: "http requests total",
    labelNames: ["handler", "method", "statuscode"],
  });
  register.registerMetric(counter);

  // Setup server to Prometheus scrapes:
  app.get("/metrics", async (req, res) => {
    try {
      res.set("Content-Type", register.contentType);
      res.end(await register.metrics());
    } catch (ex) {
      res.status(500).end(ex);
    }
  });
}

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

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!"); // custom 404
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!"); // custom error handler
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🚀  Server is running on port ${process.env.SERVER_PORT}`);
});
