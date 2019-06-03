(function () {

    const FPS = 300;
    const PROB_NUVEM = 4;
    const PROB_OBST = 5;
    var gameLoop;
    var troca;
    var deserto;
    var dino;
    var score;
    var nuvens = [];
    var obstaculo = [];
    var max;

    function init(){
        date = new Date();
        max = 1;
        deserto = new Deserto();
        dino = new Dino();
        score = new Score();
        gameLoop = setInterval(run, 1000/FPS); //seta o tempo para ele andar
        troca = setInterval(day_night, 60000);
    }

    function day_night(){
        if(deserto.element.style.backgroundColor == "white"){
            deserto.element.style.backgroundColor = "black";
        }
        else{
            deserto.element.style.backgroundColor = "white";
        }
    }

    window.addEventListener("keydown", function (e) {
        if(e.key == "ArrowUp" && dino.status==0 || dino.status==5) dino.status = 1;
        if(e.key == 'f') {
            clearInterval(gameLoop);
            clearInterval(troca);
        }
        if(e.key == 'p') dino.status = 5;
        if(e.key == "ArrowDown" && dino.status==0)dino.status = 3;
    });
    window.addEventListener("keyup", function (e) {
        if(e.key == "ArrowDown") dino.status = 0;
    });

    function Deserto(){
        this.element = document.createElement("div");
        this.element.className = "deserto";
        this.element.style.backgroundColor = "white";
        document.body.appendChild(this.element);

        this.chao = document.createElement("div");
        this.chao.className = "chao";
        this.chao.style.backgroundPositionX = "0px";
        this.element.appendChild(this.chao);
    }

    Deserto.prototype.mover = function() {
        this.chao.style.backgroundPositionX = (parseInt(this.chao.style.backgroundPositionX) - max) + "px";
        if(parseInt(this.chao.style.backgroundPositionX) % 5000 == 0){
            max = max + 0.2;   
            this.chao.style.backgroundPositionX = (parseInt(this.chao.style.backgroundPositionX) - max) + "px";
        }
    }

    function Dino(){
        this.sprites = {
            'parado' : '-40px',
            'correr1':'-765px',
            'correr2':'-809px',
            'pulando':'-676px',
            'agacha1': '-940px',
            'agacha2': '-1000px',
            'dead' : '-853px'
        };
        this.status = 5; // 0:correndo; 1:subindo; 2: descendo; 3: agachado; 4: morto; 5: parado 
        this.alturaMaxima = "87px";
        this.element = document.createElement("div");
        this.element.className = "dino";
        this.element.style.backgroundPositionX = this.sprites.parado;
        this.element.style.bottom = "0px";
        this.element.style.right = "420px";
        deserto.element.appendChild(this.element);
    }   
    
    Dino.prototype.correr = function () {
        if(this.status == 0){
            this.element.style.width = '44px';
            this.element.style.height = '47px';
            this.element.style.backgroundPositionY = '-2px';
            this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.correr1)?this.sprites.correr2:this.sprites.correr1;
        }
        else if (this.status == 1) {
            this.element.style.backgroundPositionX = this.sprites.pulando;
            this.element.style.bottom = (parseInt(this.element.style.bottom) + 1) + "px";
            if (this.element.style.bottom == this.alturaMaxima) this.status = 2;
        }
        else if (this.status == 2) {
            this.element.style.bottom = (parseInt(this.element.style.bottom) - 1) + "px";
            if (this.element.style.bottom == "0px") this.status = 0;
        }
        else if(this.status == 3){
            this.element.style.width = '60px';
            this.element.style.height = '30px';
            this.element.style.backgroundPositionY = '-20px';
            this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.agacha1)?this.sprites.agacha2:this.sprites.agacha1;
        }
        else if(this.status == 4){
            this.element.style.backgroundPositionX = this.sprites.dead;          
        }
        else if(this.status == 5){
            this.element.style.backgroundPositionX = this.sprites.parado;
        }
    }

    function Death(){
        this.sprites = {
            "botaun" : "-2px",
            "letra" : "-484px"
        }
        this.element = document.createElement("div");
        this.element.className = "death_letra";
        this.element.style.bottom = "80px";
        this.element.style.right = "150px";
        this.element.style.backgroundPositionX = this.sprites.letra;

        this.botao = document.createElement("button");
        this.botao.className = "death_botao";
        this.botao.style.bottom = "35px";
        this.botao.style.right = "230px";
        this.botao.style.backgroundPositionX = this.sprites.botaun;
        this.botao.addEventListener("click", function(){
            console.log("e morreu");
            setTimeout(window.parent.location.reload());
        });    
        
        deserto.element.appendChild(this.element);
        deserto.element.appendChild(this.botao);
        
    }

    function Nuvem(){
        this.element = document.createElement("div");
        this.element.className = "nuvem";
        this.element.style.right = "0px";
        this.element.style.top = Math.floor(Math.random()*95) + "px";
        deserto.element.appendChild(this.element);
    }

    Nuvem.prototype.mover = function(){
        this.element.style.right = (parseInt(this.element.style.right) + 1) + "px";
    }

    function Score(){
    	this.num = [];
    	this.sprites = {
    		'num0' : "-484px",
        };
        var pos_right = 0;
        for(var i = 0; i < 5; i++){
            this.valor = document.createElement("div");
        	this.num.push(this.valor);
            this.num[i].className = "score";
            this.num[i].style.backgroundPositionX = this.sprites.num0;
            this.num[i].style.bottom = "120px";
        	this.num[i].style.right = pos_right+"px";
        	deserto.element.appendChild(this.num[i]);
        	pos_right = pos_right + 10;
        }
    }

    // Score.prototype.rodar = function(){
    // 	var arr = ["-495px", "-504px", "-514px", "-524px", "-534px", "-544px", "-554px","-564px", "-574px"];
    // 	for(var a = 0; a < 9; a++){
    //         for(var b = 0; b < 9; b++){
    //             for(var c = 0; c < 9; c++){
    //                 for(var d = 0; d < 9; d++){
    //                     for(var e = 0; e < 9; e++){
    //                         this.num[0].style.backgroundPositionX = arr[e];
    // 					}
    //                     this.num[1].style.backgroundPositionX = arr[d];
    // 				}
    //                 this.num[2].style.backgroundPositionX = arr[c];
    // 			}
    //             this.num[3].style.backgroundPositionX = arr[b];
    // 		}
    //         this.num[4].style.backgroundPositionX = arr[a];
    // 	}
    // }

    function DPassaro(){
        this.sprites = {
            'voa1' : "-134px",
            'voa2' : "-180px"
        };
        this.element = document.createElement("div");
        this.element.className = "dPassaro";
        this.element.style.right = "0px";
        this.element.style.backgroundPositionX = this.sprites.voa1;
        var a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        
        switch(a){
            case 1:
                this.element.style.bottom = "15px";
                break;

            case 2:
                this.element.style.bottom = "50px";
                break;
            
            case 3:
                this.element.style.bottom = "38px";
                break;
        }        
        deserto.element.appendChild(this.element);
    }

    DPassaro.prototype.mover = function(){
        this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.voa1)?this.sprites.voa2:this.sprites.voa1;
        this.element.style.right = (parseInt(this.element.style.right) + max) + "px";    
    }

    function Cacto(){
        this.sprites = {
            'peq_um':'-228px',
            'peq_dois':'-245px',
            'peq_tres':'-279px',

            'grd_um':'-332px',
            'grd_dois':'-357px',
            'grd_quatro':'-407px'
        };
        this.element = document.createElement("div");
        this.element.className = "cacto";
        this.element.style.bottom = "0px";
        this.element.style.right = "0px";
        var a = Math.floor(Math.random() * (6 - 1 + 1) + 1); 
        switch(a){    
            case 1: 
                this.element.style.width = "25px";
                this.element.style.height = "49px";
                this.element.style.backgroundPositionX = this.sprites.grd_um;
                break;
            case 2: 
                this.element.style.width = "50px";
                this.element.style.height = "49px";
                this.element.style.backgroundPositionX = this.sprites.grd_dois;
                break; 
            case 3: 
                this.element.style.width = "75px";
                this.element.style.height = "49px";
                this.element.style.backgroundPositionX = this.sprites.grd_quatro;
                break;
            case 4: 
                this.element.style.height = "35px";
                this.element.style.width = "17px";
                this.element.style.backgroundPositionX = this.sprites.peq_um;
                break;
            case 5: 
                this.element.style.height = "35px";
                this.element.style.width = "34px";
                this.element.style.backgroundPositionX = this.sprites.peq_dois;
                break;        
            case 6: 
                this.element.style.height = "35px";
                this.element.style.width = "51px";
                this.element.style.backgroundPositionX = this.sprites.peq_tres;
                break; 
        } 
        deserto.element.appendChild(this.element)
    }

    Cacto.prototype.mover = function(){
        this.element.style.right = (parseInt(this.element.style.right) + max) + "px";
    }

    
    function run() {
        if(dino.status != 5){
            if(dino.status != 4){
                dino.correr();
                deserto.mover();
                // score.rodar();
                if (Math.floor(Math.random()*1000) <= PROB_NUVEM) {
                       if(nuvens.length > 10){
                        var index = nuvens.indexOf(nuvens[0]);
                        nuvens.splice(index, 1); 	
                    }
                    nuvens.push(new Nuvem());
                }
                //Coloca um obstáculo aleatoriamente
                if (Math.floor(Math.random()*10000) <= PROB_OBST) {
                    if(obstaculo.length > 15){
                        (nuvens[0].element).parentNode.removeChild(nuvens[0].element);
                        nuvens.shift();
                        var index = obstaculo.indexOf(obstaculo[0]);
                        obstaculo.splice(index, 1); 	
                    }
                    var a = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                    if(a == 1){
                        obstaculo.push(new Cacto());
                    }
                    if(a == 2){
                        obstaculo.push(new DPassaro());
                    }
                 }    
                 //Adiciona as núvens
                 nuvens.forEach(function (n) {
                     n.mover();
                    
                 });
        
                obstaculo.forEach(function (c) {
                    c.mover();
                    var ob_posBott = parseInt(c.element.style.bottom);
                    var ob_posRight = parseInt(c.element.style.right);
                    var ob_tam = parseInt(c.element.style.width) - 4;
                    var di_posBott = parseInt(dino.element.style.bottom);
                    var di_posRight = parseInt(dino.element.style.right);
        
                    if((ob_posRight + ob_tam > di_posRight && ob_posRight - ob_tam <= di_posRight) && ob_posBott == di_posBott){
                        dino.status = 4;
                    }
                    else if((ob_posBott == 15 && di_posBott == 0) && (ob_posRight > di_posRight - 45 && ob_posRight <= di_posRight + 45)){
                        dino.status = 4;
                    }
                    else if((ob_posBott == 50 && ob_posBott <= di_posBott + 45) && (ob_posRight > di_posRight - 45 && ob_posRight <= di_posRight + 45)){
                        dino.status = 4;
                    }
                    else if((ob_posBott == 38 && di_posBott == 0) && dino.status == 0){
                        if(ob_posRight > di_posRight - 30 && ob_posRight <= di_posRight + 30){
                            dino.status = 4;
                        }
                    }
                });

            }
            if(dino.status == 4){
                clearInterval(gameLoop); 
                clearInterval(troca); 
                var death = new Death();
            }
        }
    }

    init();
})();