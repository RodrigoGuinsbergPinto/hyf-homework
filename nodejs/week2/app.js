const express = require("express");
const data = require("./documents.json");
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search
app.get("/search", (req, res) => {
  const q = req.query.q;

  if (!q) {
    res.send(data);
  } else {
    const queryParam = data.filter((doc) =>
      Object.values(doc).some((el) => String(el).toLowerCase().includes(q))
    );
    res.send(queryParam);
  }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = req.params.id * 1;
  const doc = data.find((el) => el.id === id);

  if (!doc) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  } else {
    res.status(200).json(doc);
  }
});

//POST /searc
app.post("/search", (req, res) => {
  let result = undefined;
  const fields = req.body.fields;
  const q = req.query.q;

  if (q && fields) {
    return res.status(400).send();
  } else if (q) {
    result = data.filter((obj) =>
      Object.keys(obj).some((key) =>
        obj[key].toString().toLowerCase().includes(q.toLowerCase())
      )
    );
  } else if (fields) {
    result = data.filter((obj) =>
      Object.keys(fields).some((key) => fields[key] == obj[key])
    );
  } else return res.status(400).send();

  if (result.length < 1) {
    return res.status(404).send();
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
