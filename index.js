const express = require("express");
const app = express();

app.set("view engine", 'ejs');

app.get("/",(req, res) => {
    var nome = "Eduardo";
    var lang = "Javascript"
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000
    });
});

app.listen(8080, ()=>{console.log("App rodando")});