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

int main()
{
    cout<<Potencia(2, 3);

    return 0;
}
