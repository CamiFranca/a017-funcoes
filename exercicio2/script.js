
/*a)
const calculo = function (num1, num2) {
    console.log(num1 + num2)
}
calculo(7, 5)
b)

/*function booleano(num1, num2) {
    let resultado
    if (num1 > num2) {
        resultado = true


    } else {
        resultado = false
    }

}
booleano(8, 1)*/

/*c)
function parOuImpar (num1){
if(num1%2===0){
    console.log('o numero é par')
}else{
    console.log('o numero não é par')
}
}
parOuImpar(9)*/

// Uma função que recebe uma mensagem (`string`)
 //como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

 const write = function (frase){
    console.log(frase.toUpperCase())
    console.log(frase.length)
 }
write('meu nome')
