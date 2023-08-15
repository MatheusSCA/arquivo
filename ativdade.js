// atividade else if 1 
// descobrir entre dois numeros qual é o maior
let numero1 = 10
let numero2 = 9

if(numero1 == numero2){
   console.log("Eles sao iguais")
}
else{
    if(numero1 > numero2){
    console.log("O maior é: ",numero1)
    }
    else{
    console.log("O maior é: ",numero2)
    }
}
// atividade else if 2
// descobrir se precisa votar 
let idade = 15

if(idade >=18){
    console.log("Com",idade,"é obrigado a votar")
}
else{
  if(idade>=16){
    console.log("Com",idade, "é opcional votar")
  }
  else{
   console.log("Com",idade,"não é possivel votar")
  }
}
//atividade else if 3
//senha
const senha = 1235
if(senha==1234){
    console.log("ACESSO PERMITIDO")
}
else{
    console.log("ACESSO NEGADO")
}
// Atividade else if 4
// peso/altura
let m = 1.80 //altura
let kg = 70 // peso
PesoI = kg/( m*m) // PI = peso ideal
let PI = parseFloat(PesoI.toFixed(2))
if (PI<18.5){
    console.log("Com o indice de Massa Corporal igual a",PI,"Voce esta no estado :Magreza");
}
else{
    if(PI>18.5 && PI<24.9){
        console.log("Com o indice de Massa Corporal igual a",PI,"Voce esta considerado estado:Normal")
    }
    if(PI>24.9 && PI<29.9){
        console.log("Com o indice de Massa Corporal igual a",PI,"Voce esta considerado estado:Sobrepeso")
    }
    if(PI>29.9 && PI<39.9){
       console.log("Com o indice de Massa Corporal igual a",PI,"Voce esta considerado estado:Obesidade")
    }
    if(PI>39.9){
        console.log("Com o indice de Massa Corporal igual a",PI,"Voce esta considerado estado:Obesidade Grave")
    }
}
//Atividade if else 5
//escrever 3 numeros em ordem cresente
let N1 = 5
let N2 = 6
let N3 = 7
let maior = 0
let meio = 0
let menor = 0

if(N1==N2&&N1==N3){
    console.log("Eles são iguais")
}
else{
  if(N1>N2&&N1>N3){ //CASO Numero 1 seja maior de todos
    maior = N1
    if(N2>N3){ // Caso numero 2 seja maior que  numero 3
    meio = N2
    menor = N3
    }
    else{ // caso numero 3 seja maior que numero 2
    meio = N3
    menor = N2
    }
  } 
  if(N2>N1&&N2>N3){ //CASO Numero 2 seja maior de todos
    maior = N2
    if(N1>N3){ // Caso numero 1 seja maior que  numero 3
    meio = N1
    menor = N3
    }
    else{ // Caso numero 3 seja maior que numero 1
    meio = N3
    menor = N1
    }
  }       
  if(N3>N1&&N3>N2){//CASO Numero 3 seja maior de todos
    maior = N3
    if(N2>N1){ // Caso numero 2 seja maior que  numero 1
    meio = N2
    menor = N1
    }
    else{ // Caso numero 1 seja maior que  numero 2
    meio = N1
    menor = N2
    }
  }       
}
console.log("A sequencia crescente é:"+ menor, meio , maior)
//Atividade Switch case 1
//permissao comun gerente diretor

let permissao = "diretor"

switch(permissao){
  case("comun"):
  console.log("Bem vindo,funcionario")
  break;

  case("gerente"):
    console.log("Bem vindo,gerente")
  break;

  case("diretor"):
   console.log("Bem vindo,Diretor")
  break;
  default:
    console.log("Voce não tem posição")

}
//atividade switch case 2
//calculadora

let Num1 = 5
let operacao = "/"
let Num2 = 0
let resultado

switch(operacao){
  case("+"):
  resultado = Num1+Num2
  console.log(resultado)
  break;
  case("-"):
  resultado = Num1-Num2
  console.log(resultado)
  break;
  case("*"):
  resultado = Num1*Num2
  console.log(resultado)
  break;
  case("/"):
  resultado = Num1/Num2
  console.log(resultado)
  break;
  default:
  console.log("Operacao invalida")
}


