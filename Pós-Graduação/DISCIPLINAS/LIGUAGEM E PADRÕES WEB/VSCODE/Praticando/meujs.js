function minhaFuncao(p1,p2){
    return p1 * p2
}

document.querySelector('p#demo').innerHTML = minhaFuncao(2,4)

var pessoa = {
    primeiroNome:'Pedro',
    ultimoNome:'Souza',
    id:5566,
    nomeCompleto: function(){
        return this.primeiroNome+" "+this.ultimoNome;
    }
}
var teste = "Somos chamados de \"VIKINS\" do norte!"
alert(teste)