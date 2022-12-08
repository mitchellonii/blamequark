const express = require("express");
const app = express();

app.set("view egine", "ejs")


const render = function (req, res, next) {
    if (req.headers.range == "body") {
        res.render(`${__dirname}/web/${req.path == "/" ? "index" : req.path.substring(1)}.ejs`);

    } else {
        res.render(`${__dirname}/web/client.ejs`, { 'path': req.path == "/" ? "/index" : req.path });
    }
}



app.get("/", render);
app.get("/channels", render);
app.get("/404", render);

app.use(express.static("public"))

app.get("*", (req, res) => {
    res.redirect("/404");
});
app.listen(8000)