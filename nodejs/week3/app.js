const express = require("express");
const { on } = require("nodemon");
const app = express();
const port = process.env.PORT || 3000;

const knex = require("./database");

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  try {
    let sort = req.query.sort;
    let query = knex.select().from("contacts");

    if (sort) {
      sort = sort.replace(/[^a-zA-Z0-9_ ]/g, "");
      query = knex.select().from("contacts").orderByRaw(sort);
    }

    const contacts = await query;
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
