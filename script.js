function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('rest')
    
    if (num.value.length == 0){
       window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML= ''
        while(c <= 10){
            //Criando o option de forma dinâmica
            let item = document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
        if(n%2 == 0){
            res.innerHTML ='O seu número é par! O resto da divisão de um número par é sempre 0!'

        }else{
            res.innerHTML = 'O seu número é ímpar. Números ímpares nunca tem resto da divisão igual a 0'
        }
            
    }
    

}
let movemou = getElementById('ddr')
movemou.addEventListener('mouseenter', entrar)
movemou.addEventListener('mouseout',sair)
movemou.addEventListener('click',clicar)

function entrar(){
    movemou.innerHTML = 'Agora que você entrou. Clique!'
    movemou.style.background = 'blue'
}
function clicar(){
    movemou.innerHTML = 'Então você clicou o_O! Você \n sabia que na matemática \n blá blá blá'
}
function sair(){
    movemou.innerHTML = 'By'
}