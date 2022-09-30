const frutas = ["laranja", "limão", "uva"];

//  exercicio 1
for (let i=0 ; i <frutas.length; i++){
    const adicinarFruta = document.getElementById(`fruta-${[i+1]}`)
    adicinarFruta.innerHTML += frutas[i]   
}

// ou

// const adicinarFruta = document.getElementById('fruta-1')
// adicinarFruta.innerHTML += frutas[0]

// const adicinarFruta1 = document.getElementById('fruta-2')
// adicinarFruta1.innerHTML += frutas[1]

// const adicinarFruta2 = document.getElementById('fruta-3')
// adicinarFruta2.innerHTML += frutas[2]


// exercicio 2
let adicionafruta = document.getElementById("texto")
adicionafruta.value = "morango"

// exercicio 3

// const adiconarFruta3 = document.getElementById('fruta-4')
// function novaFruta(){
//     adiconarFruta3.innerHTML = adicionafruta.value

// }

let input= document.getElementById("texto")
const adicionaFruta3=document.getElementById("fruta-4")

function novaFruta(){
    adicionaFruta3.innerHTML=input.value

}

