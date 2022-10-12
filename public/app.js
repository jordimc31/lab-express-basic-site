const express = require("express");
const app = express();

//definir d'on hem de treure els fitxers estàtics:
app.use(express.static("public")); //fitxers estàtics

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
  response.send("<h1> Hello des d'express home page</h1>");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
  response.send("<h1>About des d'EXPRESS</h1>");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
  response.send("<h1>About des d'EXPRESS</h1>");
});

app.get("/photoGallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/photoGallery.html");
  response.send("<h1>About des d'EXPRESS</h1>");
});
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
  response.send("Hello des d'express home page");
});

app.listen(3000, () => {
  console.log("escoltant port 3000 ", __dirname);
});
