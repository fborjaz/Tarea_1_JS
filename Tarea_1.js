// Clase de los ejercicios sin ciclo
class SinCiclo{
    // Primer ejercicio, Suma de 2 numeros
    Suma(){
        // Definicion de variables
        let Num1 = 20;
        let Num2 = 15;
        let Suma = 0;
        
        // Operacion de comparacion del mayor
        if ( Num1 > Num2 ){
            Suma = Num1 + Num2;
        }else{
            console.log(`El numero ${Num1} no es mayor`)
        }
        console.log(`La suma de los numeros ${Num1} y ${Num2} es: ${Suma}.`)
    }
    
    // Segundo Ejercicio, Realizar la operacion segun el operador(+,-,*,/,%)
    Operaciones(){
        // Definicion de variables
        let Num1 = 15;
        let Num2 = 50;
        let Suma = 0;
        let Resta = 0;
        let Multi = 1;
        let Divi;
        let Reci;
        // Operaciones segun el operador(+,-,*,/,%)
        Suma = Num1 + Num2;
        Resta = Num1 - Num2;
        Multi = Num1 * Num2;
        Divi = Num1 / Num2;
        Reci = Num1 % Num2;
        // Presentacion de las operaciones
        console.log(`La suma de ${Num1} y ${Num2} es ${Suma}`);
        console.log(`La resta de ${Num1} y ${Num2} es ${Resta}`);
        console.log(`La multi de ${Num1} y ${Num2} es ${Multi}`);
        console.log(`La divi de ${Num1} y ${Num2} es ${Divi}`);
        console.log(`El reciduo de ${Num1} y ${Num2} es ${Reci}`); 
    }

    // Ejercicio 3, Presentar el mayor de dos numeros
    Num_Mayor(){
        // Definicion de variables
        let Num1 = 3;
        let Num2 = 25;

        // Operacion de comparacion del Num mayor
        if ( Num1 > Num2 ){
            console.log(`El numero ${Num1} es mayor que ${Num2}`);
        }else{
            console.log(`El numero ${Num2} es mayor que ${Num1}`);
        }
    }

    // Ejercicio 4, Dado un nombre presentarlo
    Presen_Nom(){
        // Definicion de variables
        let Nom = 'Susana';
        // Presentacion del nombre
        console.log(`El nombre ingresado fue: ${Nom}`);
    }

    // Ejercicio 5, Dado un valor de compra presentar el total con iva incluido 
    Presen_IVA(){
        // Definicion de variables
        let Valor = 50;
        let Iva = 0.12;
        let total = 0;
        // Operacion 
        total = Valor + (Valor * Iva);
        // Presentacion del total con iva
        console.log(`El total con iva es: ${total}`);
    }

    // Ejercicio 9, Dado 2 nombres indicar si son iguales o diferentes
    Diferencias_Nombres(){
        // Definicion de variables
        let Nombre1 = 'Susana';
        let Nombre2 = 'Leonela';
        // Operacion de comparacaion de nombres
        if (Nombre1 === Nombre2){
            console.log(`${Nombre1} y ${Nombre2} son nombres iguales iguales`);
        }else{
            console.log(`${Nombre1} y ${Nombre2} son nombres diferentes`);
        }
    }

    // Ejercicio 15, Calcular el vuelto a dar despues de una compra.
    Calcular_Vuelto(){
        // Definicion de variables
        let Pago = 50;
        let Costo = 25;
        let Vuelto = 0;

        // Operacion para sacar el vuelto a dar
        Vuelto = Pago - Costo;
        // Presentacion del vuelto
        console.log(`El vuelto a dar es ${Vuelto}`)
    }

    Invertir_Numero(){
        // Definicion de variables
        let num = 593;
        let invertido = parseInt(num.toString().split('').reverse().join(''));
        // Presentacion del numero invertido
        console.log(`El numero invertido de ${num} es: ${invertido}`);
    }
}



// Clase de los ejercicios con ciclo
class ConCiclo{
    // Ejercicio 6, Presentar 5 veces un nombre
    Presentar_Nombre(){
        // Definicion de variables
        let Nombre = 'Susana';
        let i = 0;
        // Presentacion de los nombres
        for (i = 0; i < 5; i++){
            console.log(`${Nombre}`);
        }
    }

    // Ejercicio 7, Presentar los numeros multiplos de 3 desde el 3 hasta el 21
    Presentar_Multiplos_3(){
        // Definicion de variables
        let i = 3;
        // Presentacion de los numeros multiplos de 3 desde el 3 hasta el 21
        for (i = 3; i <= 21; i++){
            if (i % 3 === 0){
                console.log(`${i}`);
            }
        }
    }

    // Ejercicio 8, Presentar los numeros multiplos de 3 desde le 21 hasta el 3
    Presentar_Multiplos_3_Hasta_21(){
        // Definicion de variables
        let i = 21;
        // Presentacion de los numeros multiplos de 3 desde le 21 hasta el 3
        for (i = 21; i >= 3; i= i-3){
            if (i % 3 === 0){
                console.log(`${i}`);
            }
        }
    }

    // Ejercicio 11, Dado un arreglo presentar sus elementos
    Presentar_Arreglo(){
        // Definicion de variables
        let Numeros = [12,14,20,'Susana',25,50];
        let i = 0;
        // Presentacion de los elementos del arreglo
       for ( i = 0; i < Numeros.length; i++ ){
        console.log(`${Numeros[i]}`);
       }
    }

    // Ejercicio 12, Dado un arreglo de numeros presentar los num menores a 10.
    Presentar_Arreglo_Menores_10(){
        // Definicion de variables
        let Numeros = [12,14,20,25,50,5,8,2,10];
        let i = 0;
        // Presentacion de los elementos del arreglo menores a 10
        for ( i = 0; i < Numeros.length; i++ ){
            if (Numeros[i] < 10){
                console.log(`${Numeros[i]}`);
            }
        }
    }

    // Ejercicio 13, Dado un arreglo de Num presentar los Num impares y al final al suma de los pares
    Presentar_Arreglo_Impares_y_Pares(){
        // Definicion de variables
        let Numeros = [12,11,23,25,50,5,8,2,3];
        let i = 0;
        let suma = 0;
        // Presentacion de los elementos del arreglo impares y pares
        for ( i = 0; i < Numeros.length; i++ ){
            if (Numeros[i] % 2 === 0){
                suma = suma + Numeros[i];
            }else{
                console.log(`${Numeros[i]}`);
            }
        }
        console.log(`La suma de los numeros pares es: ${suma}`);
    }

    // Ejercicio 14, Presentar el Primero, medio y ultimo valor de una arreglo
    Presentar_Arreglo_Primero_Medio_Ultimo(){
        // Definicion de variables
        let Numeros = [12,11,23,25,50];
        let i = 0;
        let primero = Numeros[0];
        let medio = Numeros[(Numeros.length-1) / 2];
        let ultimo = Numeros[Numeros.length - 1];
        // Presentacion de los elementos del arreglo
        for ( i = 0; i < Numeros.length; i++ ){
            if (i === 0){
                console.log(`El primero es: ${primero}`);
            }else if (i === (Numeros.length-1) / 2){
                console.log(`El medio es: ${medio}`);
            }else if (i === Numeros.length - 1){
                console.log(`El ultimo es: ${ultimo}`);
            }
        }
    }

    // Ejercico 16, Presentar la tabla de multiplicar de cualquier num del 1 - 12
    Presentar_Tabla_Multiplicar(){
        // Definicion de variables
        let tabla = 4;
        let i = 1;
        // Presentacion la tabla de multiplicar de num
        for ( i = 1; i <= 12; i++ ){
            console.log(`${tabla} * ${i} = ${tabla * i}`)
        }
    }

    // Ejercico 17, Realizar la multiplicar de dos numeros por medio de suma sucesiva
    Multiplicacion_Por_Suma(){
        // Definicion de variables
        let num1 = 2;
        let num2 = 3;
        let suma = 0;
        let i = 0;
        // Presentacion de la tabla de multiplicar de num
        for ( i = 0; i < num2; i++ ){
            suma = suma + num1;
        }
        console.log(`La suma de los numeros es: ${suma}`);
    }

    // Ejercicio 18, Realizar la division de dos numeros por medio de resta sucesiva
    Division_Por_Resta(){
        // Definicion de variables
        let n1 = 15;
        let n2 = 3;
        let cociente = 0;
        let resto = n1;
        
        // Operacion y presentacion de la division por resta
        while ( resto >= n2 ) {
          resto -= n2;
          cociente++;
        }
        
        console.log(`El cociente es ${cociente} y el resto es ${resto}.`);
    }

    // Ejercico 19, Calcular el factorial de un numero
    Calcular_Factorial(){
        // Definicion de variables
        let numero = 5;
        let factorial = 1;
        let i = 0;
        // Presentacion del factorial de numero
        for ( i = 1; i <= numero; i++ ){
            factorial = factorial * i;
            console.log(`${numero} * ${i} = ${factorial}`)
        }
        console.log(`El factorial de ${numero} es: ${factorial}`);
    }

    // Ejercicio 20, Calcular el exponente de un numero
    Calcular_Exponente(){
        // Definicion de variables
        let num1 = 6;
        let num2 = 2;
        let multi = 1;
        let i = 0;
        // Presentacion de la tabla de multiplicar de num
        for ( i = 0; i < num2; i++ ){
            multi = multi * num1;
        }
        console.log(`El exponente de ${num1} es: ${multi}`);
    }
    
    // Ejercicio 21, Calcular la serie fibonaccia de un numero
    Calcular_Serie_Fibonacci(){
        // Definicion de variables
        let numero = 10;
        let fibonacci = [];
        let i = 0;

        // Inicializacion de la serie
        fibonacci[0] = 0;
        fibonacci[1] = 1;

        // Presentacion de la serie fibonaccia
        for ( i = 2; i < numero; i++ ){
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        console.log(`La serie fibonaccia de ${numero} es: ${fibonacci}`);
    }

    // Ejercicio 23, Presentar los divisores de un numero
    Calcular_Divisores(){
        // Definicion de variables
        let numero = 12;
        let divisores = [];
        let i = 0;
        // Presentacion de los divisores de numero
        for ( i = 1; i < numero; i++ ){
            if ( numero % i === 0 ){
                divisores.push(i);
            }
        }
        console.log(`Los divisores de ${numero} son: ${divisores}`);
    }

    // Ejercicio 24, Presentar si un numero es perfecto o no
    Sacar_Numero_Perfecto(){
        // Definicion de variables
        let numero = 6;
        let suma = 0;
        let i = 0;
        // Presentacion de si el numero es perfecto o no
        for ( i = 1; i <= numero /2; i++ ){
            if ( numero % i === 0 ){
                suma = suma + i
            }
        }

        if ( suma === numero && numero ){
            console.log(`El numero ${numero} SI es perfecto`);
        }else{
            console.log(`El numero ${numero} NO es perfecto`);
        }
    }

    // Ejercicio 25, Presentar si un numero es primo
    Sacar_Numero_Primo(){
        // Definicion de variables
        let numero = 61;
        let i = 0;
        let primo = true;

        // Bucle para saber si es numero es divisible en rango 2 
        for ( i = 2; i < numero; i++){
            if ( numero % i === 0 ){
                primo = false;
            }
        }

        // Presentacion del numero de si es primo o no
        if ( primo ){
            console.log(`El numero ${numero} es primo`);
        }else{
            console.log(`El numero ${numero} no primo`);
        }
    }
}



// Inicializacion de las instancias sin ciclos

let Sincicloss = new SinCiclo();
// Sincicloss.Suma();
// Sincicloss.Operaciones();
// Sincicloss.Num_Mayor();
// Sincicloss.Presen_Nom();
// Sincicloss.Presen_IVA();
// Sincicloss.Diferencias_Nombres();
// Sincicloss.Calcular_Vuelto();
// SinCiclo.Invertir_Numero()


// Inicializacion de las instancias con ciclos

let Ciclos = new ConCiclo();
// Ciclos.Presentar_Nombre();
// Ciclos.Presentar_Multiplos_3();
// Ciclos.Presentar_Multiplos_3_Hasta_21();
// Ciclos.Presentar_Arreglo();
// Ciclos.Presentar_Arreglo_Menores_10();
// Ciclos.Presentar_Arreglo_Impares_y_Pares();
// Ciclos.Presentar_Arreglo_Primero_Medio_Ultimo();
// Ciclos.Presentar_Tabla_Multiplicar();
// Ciclos.Multiplicacion_Por_Suma();
// Ciclos.Division_Por_Resta();
// Ciclos.Calcular_Factorial();
// Ciclos.Calcular_Exponente();
// Ciclos.Calcular_Serie_Fibonacci();
// Ciclos.Calcular_Divisores()
// Ciclos.Sacar_Numero_Perfecto()
// Ciclos.Sacar_Numero_Primo()
