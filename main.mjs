import express, { response } from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
    fs.readFile("log_in.html", (error, data) => {
        if (error) {
            res.status(500).send("Error loading log_in.html");
        } else {
            res.status(200).type("html").send(data);
        }
    });
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/login", (req, res) => {
    const { userid, userpw } = req.query;
    res.render("result", { userid, userpw }); // ejs 렌더링
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
