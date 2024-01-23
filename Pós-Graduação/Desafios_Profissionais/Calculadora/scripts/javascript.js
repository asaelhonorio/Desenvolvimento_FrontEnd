//VARIÁVEL GLOBAL QUE BUSCA O ELEMENTO DO "VISOR"
let inputResultado = document.getElementById("inputCalculadora")
//OBJETO QUE REGISTRA OS VALORES E FUNÇÕES DO CÁLCULO
let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
}
//AO CARREGAR A PÁGINA, ATRIBUI EVENTOS AOS BOTÕES POR MEIO DOS SEUS IDENTIFICADORES
window.addEventListener("load", function(){
    atribuirEventos()
})
//ATRIBUI EVENTOS AOS NÚMEROS
function atribuirEventos(){
    document.querySelector("#btnValor0").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor1").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor2").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor3").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor4").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor5").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor6").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor7").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor8").addEventListener("click", inserirNumero)
    document.querySelector("#btnValor9").addEventListener("click", inserirNumero)
    //ATRIBUI EVENTOS AOS BOTÕES DE OPERADORES, PONTO E RESULTADO
    document.querySelector("#btnPonto").addEventListener("click", inserirNumero)
    document.querySelector("#btnSoma").addEventListener("click", clicarOperador)
    document.querySelector("#btnDividir").addEventListener("click", clicarOperador)
    document.querySelector("#btnMultiplicar").addEventListener("click", clicarOperador)
    document.querySelector("#btnSubtrair").addEventListener("click", clicarOperador)
    document.querySelector("#btnLimpar").addEventListener("click", limparDados)
    document.querySelector("#btnResultado").addEventListener("click", clicarResultado)
}
//ADICIONA O NÚMERO NO VISOR
function inserirNumero(){
    //SE O VALOR NÃO FOR UM NÚMERO, SUBSTITUI PELO VALOR DO CONTEÚDO DO BOTÃO
    if(isNaN(inputResultado.value)){
        inputResultado.value = event.target.textContent
        //SE NÃO, ADICIONA O VALOR AOS DEMAIS
    }else{
        //SE O VALOR FOR ZERO, SUBSTITUI O VALOR DO VISOR PELO NÚMERO CLICADO
        if(inputResultado.value == 0){
            inputResultado.value = event.target.textContent
        //SE NÃO, ADICIONA O NÚMERO AOS DIGITOS NO VISOR
        }else{
            inputResultado.value += event.target.textContent
        }
    }
}
//OPERAÇÃO DE SOMA
function somar(valor1, valor2){
    return valor1 + valor2
}
//OPERAÇÃO DE SUBTRAÇÃO 
function subtrair(valor1, valor2){
    return valor1 - valor2
}
//OPERAÇÃO DE MULTIPLICAÇÃO
function multiplicar(valor1, valor2){
    return valor1 * valor2
}
//OPERAÇÃO DE DIVISÃO
function dividir(valor1, valor2){
    if(valor2 === 0){
        return "Erro, não é possível dividir um número por zero!"
    }else{
        return valor1 / valor2
    }
}
//LIMPA O VISOR E OS DADOS DO CÁLCULO
function limparDados(){
    inputResultado.value = ""
    calculo.valorSalvo = null
    calculo.funcaoParaCalcular = null
}
//INSERE O PONTO PARA CASAS DECIMAIS
function inserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0."
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + "."
    }
}
//ATRIBUI A FUNÇÃO DE ACORDO COM O TIPO DE OPERADOR CLICADO
function atribuirOperacao(operador){
    if(operador === "+"){
        calculo.funcaoParaCalcular = somar
    }else if(operador === "-"){
        calculo.funcaoParaCalcular = subtrair
    }else if(operador === "*"){
        calculo.funcaoParaCalcular = multiplicar
    }else{
        calculo.funcaoParaCalcular = dividir
    }
}
//ATUALIZA VALORES DE CALCULO
function clicarOperador(){
    if(!isNaN(inputResultado.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(inputResultado.value)
        }else if(calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))
        }
    }
    let operador = event.target.textContent
    atribuirOperacao(operador)
    inputResultado.value = operador
}
//EXIBE RESULADOR NO VISOR
function clicarResultado(){
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))
        inputResultado.value = resultado
        calculo.valorSalvo = resultado
        calculo.funcaoParaCalcular = null
    }
}