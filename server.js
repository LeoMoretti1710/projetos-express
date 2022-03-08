//Variável que recebe o módulo Express =>importando o EXPRESS

var express = require ('express');

// Objeto que vamos o uso dentro da aplicação
var app = express();

// usando o método GET para acessar a rota
app.get('/', function(req, res){
    res.send('Hello World');
});
app.get('/uma_lista', function(req, res){
    res.send("Esse é o conteúdo para um componente de lista");
});
//usando a areofunction
app.get('/zf*zy', (req, res) =>{
    res.send("Outro componente a partir de uma rota customizada");
});

// Aqui vamos implementar o "Escutador da requisição"

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("O Servidor pode ser acessado em http:// %s:%s" , host, port);
});