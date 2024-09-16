const tela = document.getElementById('tela');
// recebe a div em uma variavel
function adicionarValor(valor){
    tela.value+=valor;
    // o value de um input type text e o que aparecera escrito nesse input
    // adiciona o botao selecionado pelo usuario ao value do input
}
function calcular(){
    let conta = tela.value;
    // vai pegar o valor do input
    if(conta){
        if(eval(conta) == Infinity){
            alert('Impossivel dividir por zero')
            tela.value = ""
        }
        else{
            tela.value = eval(conta);
        }
        

    }   
}
function limparTela(){
    tela.value = '';
}
document.addEventListener('keydown', function(event){
    // keydown é um evento que ve se alguma tecla foi acionada
    // sempre que uma tecla e acionada chama a funtion
    let tecla = event.key;
    if(tecla>=0 && tecla <=9){
        adicionarValor(tecla);
    }
    else if (tecla === '-' || tecla ==='+' || tecla === '/' || tecla === '*'){
        adicionarValor(tecla);
    }
    else if(tecla === 'Enter'){
        calcular();
    }
    else if(tecla === 'Backspace'){
        apagar()
    }
    else if(tecla === '.'){
        adicionarValor('.')
    }
})
function apagar(){
    let visor = tela.value;
    tela.value = visor.slice(0,-1)
}