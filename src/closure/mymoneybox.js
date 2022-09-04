// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins; 
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);



function moneyBox(coins) {  
    let saveCoins = 0;
    function countCoins(coins) {  
        saveCoins += coins; 
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(7);
myMoneyBox(40);

console.log()

const myMoneyBoxAnna = moneyBox();
myMoneyBoxAnna(30);
myMoneyBoxAnna(60);
myMoneyBoxAnna(1000);
