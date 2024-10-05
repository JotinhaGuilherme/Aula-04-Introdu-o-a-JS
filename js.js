// var num1 = 48946
// var num2 = 48451

// function soma(){
//     const resultado = num1 + num2
//     return resultado
// }

// // function mutiplicacao(num1, num2){
// //     const resultado = num1 * num2
// //     return resultado
// // }

// // function subtracao (num1, num2){
// //     const resultado = num1 - num2
// //     return resultado
// // }()

// // function divisao (num1, num2){
// //     const resultador = num1 / num2
// //     return resultador
// // }

// alert(`soma ${soma()}`)

// document.querySelector(".resultado").addEventListener(click, soma)

function soma(){
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value)
    alert(`Soma: ${num1 + num2}`)
}