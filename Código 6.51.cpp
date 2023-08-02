/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int Potencia (int base, int pot){
    
    if(pot == 0){
        return 1;
    }else{
        return base * Potencia(base, pot - 1);
    }
}

int sla(int a, int b, int p){
    
    if(b == p){
        return a;
    }else{
        return a + sla(a, b - 1, p);
    }
    
}

int main()
{
    int a, b, p;
    cout<<"Insira o primeiro número inteiro"<<endl;
    cin>>a;
    cout<<"Insira o segundo número inteiro"<<endl;
    cin>>b;
    cout<<"Insira a partir de qual número o sistema ira parar de subtrair (inserir 1 para que não seja menor que 1"<<endl;
    cin>>p;
    cout<<sla(a,b,p);

    return 0;
}
