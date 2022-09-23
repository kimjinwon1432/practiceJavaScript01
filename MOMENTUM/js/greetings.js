const loginForm=document.querySelector("#login-form"); //can search inside. because It is HTML element
const loginInput = loginForm.querySelector("input"); //... document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASS="hidden";
const USERNAME_KEY="username"


function onLoginSubmit(event){ 
    event.preventDefault();//the default behavior browser is to be stoped... 
    const username=loginInput.value;
    console.log(event);   
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //"Hello " +USERNAME_KEY;
    greeting.classList.remove(HIDDEN_CLASS);
}

/*
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    console.log(event.screenX);
    alert("click")
}
*/
//link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASS)
}