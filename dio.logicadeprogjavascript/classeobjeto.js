
//exemplo de Programação Orientada a Objetos (POO) em JavaScript.


//Pense em uma classe como uma forma de bolo de verdade: ela não é o bolo pronto; ela é o modelo que define como o bolo será criado.

//O constructor é uma função especial que é executada automaticamente quando você cria um objeto usando new.

//objeto é uma instancia especifica de uma classe que possui propriedades e metodos

//o objeto é criado a partir de uma classe, atraves do new

//classe é um modelo para criar objetos que compartilham caracteristicas e comportamento semenlhantes

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }



escrever(){
    console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
}

}

//"Crie um novo objeto baseado na classe formaDeBolo."

let boloFesta = new formaDeBolo ("chocolate", "nutella")
let boloCasamento = new formaDeBolo ("baunilha", "ameixa")

//metodo

boloCasamento.escrever()
boloFesta.escrever()

