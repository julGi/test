var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    
    var params = querystring.parse(url.parse(req.url).query);
    if ('prenom' in params && 'nom' in params) {
        console.log('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    } else {
        console.log('--> Pas de paramètre')
    }
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
    res.end();
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})

console.log('Hello on port 8080 !')
server.listen(8080); // Démarre le serveur

//server.close(); // Arrête le serveur. Déclenche l'évènement close


// Emission d'évènements
var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');