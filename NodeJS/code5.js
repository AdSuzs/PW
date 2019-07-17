var promessa = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(20);
    }, 2000);
});

promessa.then(function(valor){
    console.log(valor);
})