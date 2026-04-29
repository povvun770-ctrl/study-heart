// Example: Alert when click login
function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Login Successful!");
    } else {
        document.getElementById("error").innerHTML = "Wrong Username or Password!";
    } <
    script src = "script.js" > < /script>
}
document.querySelector(".login-btn").addEventListener("click", function() {
    alert("Login button clicked!");
});

// Example: Click book
let books = document.querySelectorAll(".book-grid img");
books.forEach(function(book) {
    book.addEventListener("click", function() {
        alert("You clicked a book!");
    });
});