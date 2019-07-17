function promessa(num){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(num);
        }, 1000);
    });
}   

async function peganum(){
    console.log(1);
    var num = await promessa(100);
    console.log(num);
};

peganum();
console.log(2);
