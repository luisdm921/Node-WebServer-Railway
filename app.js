require('dotenv').config();
const express = require("express");
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir conteido estatico 
app.use(express.static('public') )

app.get("/", (req, res) => {
  res.render('home', {
    nombre: "Luis Francisco",
    titulo: "Curso de node"
  });
});
app.get("/generic", (req, res) => {
  res.render('generic',{
    nombre: "Luis Francisco",
    titulo: "Curso de node"
  });
});
app.get("/elements", (req, res) => {
  res.render('elements',{
    nombre: "Luis Francisco",
    titulo: "Curso de node"
  });
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + '/public/404NOTFOUND.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
