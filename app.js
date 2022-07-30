const express = require("express");
const path = require("path")
const app = express();
const publicPath = path.resolve(__dirname, "./public")
const port = 3000;

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.listen(port, () => {
    console.log("Corriendo piola en el 3k")
})

