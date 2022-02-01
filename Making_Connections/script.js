let req = 2;
let con = 418;

function change() {
    let text = document.getElementById("realname").innerHTML;
    document.getElementById("realname").innerHTML = text.replace("Jane Doe", "any other name");
}

function accept() {
    var x = document.getElementById("top");
    x.remove(x.selectedIndex);
    req--;
    document.getElementById("minibtn").innerHTML = req
    con++;
    document.getElementById("minibtn1").innerHTML = con
}

function decline() {
    var x = document.getElementById("top");
    x.remove(x.selectedIndex);
    req--;
    document.getElementById("minibtn").innerHTML = req
}

function accept1() {
    var x = document.getElementById("bot");
    x.remove(x.selectedIndex);
    req--;
    document.getElementById("minibtn").innerHTML = req
    con++;
    document.getElementById("minibtn1").innerHTML = con
}

function decline1() {
    var x = document.getElementById("bot");
    x.remove(x.selectedIndex);
    req--;
    document.getElementById("minibtn").innerHTML = req
}
