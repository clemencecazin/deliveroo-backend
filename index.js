const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 3100, () => {
    console.log("Server Started");
});
