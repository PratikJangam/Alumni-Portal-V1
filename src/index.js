const express = require("express");

require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/user");
const feedRouter = require("./routers/feed");
const admin = require("./routers/admin");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(admin);
app.use(feedRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
