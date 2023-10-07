const express = require("express");
const app = express();
//Lay du lieu GET
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/user", checkLogin, (req, res) => {
  console.log("Here");
  //res.send("Xin chao Hoc Tran");
  res.send("Hello world");
});

//Login
let users = [{id:1, username: "hoctran", password: "123456789" }];
app.post("/login", (req, res) => {
  //logic cau request
  console.log(req.body);
  if (
    req.body.username === users[0].username &&
    req.body.password === users[0].password
  ) {
    res.status(200).json({ message: "Dang nhap thanh cong" });
    return;
  }
  res.status(400).json({ message: "Dang nhap that bai" });
});
//Dang ky
app.put("/resgister", (req, res) => {
  res.status(200).json({ message: "Day la PUT Request" });
});

//middleware Da dang nhap chua
function checkLogin(req, res, next) {
  let isLogin = true;
  if (!isLogin) {
    res.send("Chua Dang nhap");
    return;
  }
  next();
}

app.listen(3000);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my-secret-pw",
  database: "public"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});