var counter = function (init) {

    return function () {
   
     return ++init;
   
    }
   
   }
   
   
   var incrementar = counter(1);
   
   console.log('Primeira chamada ' + incrementar());
   
   console.log('Segunda chamada ' + incrementar());
   
   console.log('Terceira chamada ' + incrementar());
   
   console.log('Quarta chamada ' + incrementar());
   
   
   
   /* Resultado esperado
   
   Primeira chamada 2
   
   Segunda chamada 3
   
   Terceira chamada 4
   
   */