function custom() {
    var myobj = document.getElementById("define");
    myobj.remove();
};

function logout() {
    let text = document.getElementById("login").innerHTML;
    document.getElementById("login").innerHTML = text.replace("Login", "Logout");
}