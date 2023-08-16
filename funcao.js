let n1 = 4, n2 = 2
function subtra(n1, n2) {
    return n1 - n2
}
function multi(n1, n2) {
    return n1 * n2
}
function div(n1, n2) {
    return n1 / n2
}
console.log("n1:", n1, " n2:", n2)
console.log("subtracao:", subtra(n1, n2), "\nmultiplicao", multi(n1, n2), "\ndivisao:", div(n1, n2))
//funcao par ou impar
function ParOuImpar(n1) {
    if (n1 % 2 !== 0) {
        return "impar"
    }
    else {
        return "é par"
    }
}
console.log("Numero 1 é:", ParOuImpar(n1))

//funcao soma de um array
let r = 0
let a = [1, 2, 3, 4, 5]
function AS(a) {
    for (i = 0; i < a.length; i++) {
        r += a[i]
    }
    return r
}
console.log("soma do array é:",AS(a))

//funcao para um array com mais 5 letras
const p = ["abcdef","abcde","abcd","abc","ab","a"]
const f = []
function p5(p){
    for(i=0;i < p.length;i++){
        if(p[i].length>=5){
            f.push(p[i])
        }
    }
    return f
}
console.log("as palavras com mais de 5 letras:",p5(p))
//funcao lista de compras 
const lista={
    leite:3,
    arroz:2,
    feijao:6,
    acucar:4
}
let preco = 0
function pre(lista){
    for(i=0;i<lista.length;i++){
        preco+=lista.values[i]
    }
    return preco
}
console.log(pre(lista))