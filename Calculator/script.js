
let operator = undefined;
let count = "";
let part1 = "";
let part2 = "";

function press(number) {
    let count = document.getElementById("display").innerHTML 
    if (operator == undefined && count != 0) {
        let newCount = count + number
        document.getElementById("display").innerHTML = count.replace(count, newCount)
    } else if (operator != undefined && count != 0) {
        let newCount = count + number
        document.getElementById("display").innerHTML = count.replace(count, newCount)
    } else if (count == 0) {
        document.getElementById("display").innerHTML = count.replace(0, number)
    } else {
        document.getElementById("display").innerHTML = count.replace(count, number)
    }
}


function setOP(op) {
    operator = op
    part1 = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = 0;
    console.log(operator)
    
}


function calculate() {
    var answer = undefined
    part2 = document.getElementById("display").innerHTML
    console.log(part1)
    console.log(part2)
    switch (operator) {
        case '/':
            answer = part1 / part2;
            break;
        case '*':
            answer = part1 * part2;
            break;
        case '-':
            answer = part1 - part2;
            break
        case '+':
            answer = +part1 + +part2;
            break;
    }
    let reCount = document.getElementById("display").innerHTML 
    document.getElementById("display").innerHTML = reCount.replace(reCount, answer)
}












function clr() {
    document.getElementById("display").innerHTML = 0;
}
