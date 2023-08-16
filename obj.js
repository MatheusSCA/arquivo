let cinema={
nome: "Enigma de outro mundo",
genero:"Terror",
nota:10
}
console.log(cinema)
console.log(cinema.nome)

let numeros = [1,2,3,4,5,6,7,8,9,10,11]
let par = []
let impar= []
for(let i = 1; i < numeros.length+1; i++){
    if (numeros[i]%2==0||numeros[i]==0){
        par.push(i)
    }
    else{
        impar.push(i)
    }
}

console.log("os numeros pares sao:",impar)
console.log("os numeros impares sao:",par)

//vazio ou não
let caixa={}
if(Object.keys(caixa).length===0){
 console.log("vazio")
}
else{
 console.log("cheio")
}

//Lista de compras
let ListaDeCompras={
    leite:3,
    arroz:2,
    feijao:6,
    acucar:4
}
let compras=0
for(let i=0;i<5;i++){
   compras+=Object.values(ListaDeCompras)
}
console.log("valor das compras e:",compras)

//livros
const livros={
    "Iluminado":50,
    "Os setes maridos de evelyn hugo":60,
    "O Hobit":0
}
for(let i in livros){
    if(Object.values(livros[i])==0){
    console.log(Object.keys(livros))
    }
}
