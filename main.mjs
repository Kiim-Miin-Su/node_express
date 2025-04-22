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
app.get("/log_in", (req, res) => {
    console.log("log_in is called (GET)");
    console.log(req.query);
    res.status(200).send("log_in success");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
