alert("Welcome to NRIIT Learning Mangement System")
let heading = document.getElementById ("welcome");
heading.innerHTML = "welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is Fun"
console.log("Message element: ", msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System ")
}
function changeHeading () {
    document.getElementById("welcome").
    innerHTML = "Welcome Python FullStack Developers"}
    let heading1=document.querySelector("#welcome");
    console.log("Heading element: ", heading)
    let button = document.getElementById("btnGreeting");
    button.addEventListener("click", function () {
        alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name || !email || !password){
        alert("Please fill in all fields.");
        return;
    }
    alert("Registration successful!");

    //prefrom validation or further proccessing here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

})
                    