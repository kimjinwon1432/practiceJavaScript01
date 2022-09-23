/*const title = document.querySelector(".hello h1");

function handleTitleClick(){
    const currentColor=title.style.color;
    let newColor=range(255);
    if(title.style.color === currentColor){
        title.style.color="white";
    } else{
        title.style.color="blue";
    }
    title.style.color=newColor;
}
console.dir(title);
function handleTitleMouseEnter(){
    title.style.backgroundColor="white";
    title.innerText="Mouse is here!";
}

function handleTitleMouseOut(){
    
    title.style.backgroundColor="gray";
}

function handleMouseLeave(){
    title.innerText="Mouse is gone!";
}

function handleWindowCopy(){
    alert("Don't Copy!");
}

function pasteSomthing(){
    alert("Don't paste!");
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
    cnt++;
    console.log(cnt);
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("WIFI");
}
let cnt=0;
title.addEventListener("click",handleTitleClick);
//title.addEventListener("mouseenter", handleTitleMouseEnter);
//title.addEventListener("mouseout", handleTitleMouseOut);
//title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
//transfer css to element
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass="click";
    const clickedActive="active";
    const clickedSexyFont=h1.className;
    h1.classList.toggle("click");

}
console.log(h1.classList);
h1.addEventListener("click", handleTitleClick)