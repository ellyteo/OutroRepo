//--------------------------------Exemplo 1-----------------------------------------------//

//function
function exercicio1() {
    alert("oi")
}
//getElement
const buttonexercicio1 = document.getElementById("exercicio1")
//addEventListner
buttonexercicio1.addEventListener('click', () => { exercicio1() })

//--------------------------------Exemplo 2-----------------------------------------------//

function exercicio2() {
    alert("tchau")
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2() })