class Empregado{
    constructor(nome, salario){
        this.nome = "";
        this.salario = 0.0;
    }
    setSalario(valor){
        if(valor < 0){
            valor = 0.0;
        }
        this.salario = valor;
    }

    getSalario(){
        console.log("salario: "+this.salario); 
    }

    setNome(palavra){
        this.nome = nome;
    }

    getNome(){
        console.log("nome: "+this.nome); 
    }
}

bighit = new Empregado("Taehyung",2345);
jyp = new Empregado("BangChan", 1234);

bighit.getSalario();
jyp.getSalario();

bighit.setSalario(2345+(2345 * 0.1));
jyp.setSalario(1234+(1234 * 0.1));

bighit.getSalario();
jyp.getSalario();

