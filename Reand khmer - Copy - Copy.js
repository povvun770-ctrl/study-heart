function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Wrong Username or Password!");
    }
}