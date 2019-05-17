
var ponto = 0;
var tipo = ["", "Papel", "Pedra", "Tesoura"];

var win = "Você ganhou a rodada :)";
var lost = "Você perdeu :(";
var eqs = "A rodada empatou :|";

console.log("Bem - Vindx!");


while(1){
    console.log("Escolha a sua jogada: \n 1 - Papel \n 2 - Pedra \n 3 - Tesoura");
    var enJ = parseInt(prompt("Entre com a sua jogada:"));
    var enC = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log("O computador jogou: "+tipo[enC]);
    if(enJ == 1){
        if(enC == 2){
            console.log(win);
            ponto += 1;
        }
        else if(enC == 3){
            console.log(lost);
            console.log("Sua pontuação foi: "+ponto)
            break;
        }
        else if(enC == 1){
            console.log(eqs);
        }
    }

    if(enJ == 2){
        if(enC == 3){
            console.log(win);
            ponto += 1;
        }
        else if(enC == 2){
            console.log(lost);
            console.log("Sua pontuação foi: "+ponto)
            break;
        }
        else if(enC == 2){
            console.log(eqs);
        }
    }

    if(enJ == 3){
        if(enC == 1){
            console.log(win);
            ponto += 1;
        }
        else if(enC == 2){
            console.log(lost);
            console.log("Sua pontuação foi: "+ponto)
            break;
        }
        else if(enC == 3){
            console.log(eqs);
        }
    }
    if(enJ != 1 && enJ != 2 && enJ != 3 ){
        console.log("Opção inválida!");
        break;
    }
}

   