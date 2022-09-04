const myGlobal = 0; 

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {  //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();


const myAño = 2018;

function myFecha(){
    const myMes = 12;
    console.log(myAño);

    function miDia() {
        const myDia = 9;
        console.log(myMes, myAño)

        function diaEterno(){
            console.log(myDia, myMes, myAño);
        }
        return diaEterno();
    }
    return miDia();
}

myFecha();