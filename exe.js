let par = []
let impar= []
for(let i =0; i<11;i++){
    if (i%2!=0){
        console.log(i,"é impar")
        par.push(i)
    }
    else{
        console.log(i,"é par")
        impar.push(i)
    }
}
let fruta = ["maca","uva"]
fruta.push("goiaba")
fruta.pop("maca")
fruta.unshift("banana")

console.log(fruta)
console.log("os numeros impares sao:",impar)
console.log("os numeros pares sao:",par)

let letras = ["abc","bca","cba"]
let primeira = []
for(i=0;i<letras.length;i++){
   primeira.push(letras[i].slice()[0])
   console.log(primeira)
}
