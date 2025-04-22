import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "public")));

// 뿌려주는 페이지
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "log_in.html"));
}); //

// EJS 세팅
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 로그인 후 처리
app.get("/login", (req, res) => {
    const { userid, userpw } = req.query;
    res.render("result", { userid, userpw });
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
