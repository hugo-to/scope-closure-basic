function greeting(){
    let userName = 'Hugo';

    function displayUserName(){
        return `Hi ${userName}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());