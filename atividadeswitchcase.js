//Atividade Switch case 1
//permissao comun gerente diretor

const permissao = "comun"

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