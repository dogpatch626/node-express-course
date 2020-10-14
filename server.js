const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockuserdata = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockuserdata,
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billy";
  const mockPassword = "secret";

  if(username === mockUsername && password ===mockPassword){
    res.json({
      success:true,
      message: "pass and user match",
      token: "encrypted token goes here"

    })
  }else{
    res.json({
      success: false,
      message: "pass and user fail"
    })
  }
});

app.listen(8000, function () {
  console.log("server is running");
});
