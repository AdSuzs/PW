const fs = require('fs');
fs.rename('imagem1.jpg', 'imagem2.jpg', function(err){
    if(err){
        return console.log(err);
    }
});