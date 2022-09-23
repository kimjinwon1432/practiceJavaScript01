const title = document.getElementById("title");

title.innerText="got you!";
//title.className="hello";
title.autofocus=true;
console.dir(title);

console.log(title.className);
console.log(title)

const hellos =document.getElementsByClassName("hello");
console.log(hellos);
console.log("hellos[0]", hellos[0]);
//hellos.innerText="byebye"; //does'n works

const hellos02 = document.querySelector(".hello");
console.log("hellos02", hellos02)
hellos02.innerText="good Luck";

const hellos03 = document.querySelectorAll(".hello");
console.log("hellos03", hellos03);
for(let i =0; i<hellos.length;i++)
    if(i%2==0)hellos03[i].innerText= "byebye";
    else hellos03[i].innerText="Great";
console.dir(hellos03);

const div_child2 = document.querySelector(".div02 h1:nth-child(2)");
console.dir(div_child2);
div_child2.innerText="f...father?";
div_child2.style.color = "green";
div_child2.style.border
console.log("div_child2", div_child2);
const hihihi = document.getElementsByTagName("h2");
console.log(hihihi);

const hihihi2 = document.querySelector(".div01 h1");
console.log("hihihi2", hihihi2);

const div02 = document.querySelectorAll(".div02 h1");
console.log("div02", div02);
const div02_1 = document.querySelector(".div02 h1");
console.log("div02_1", div02_1);
/*
document
 - getElementById(IdName): 하나의 태그를 가져온다
 - getElementsByClassName(ClassName): 단일 혹은 복수(배열형태로) 가져옴.
 - querySelector(Tag... Use CSS notation): 단일항목, BYId와 다르게 하위의 요소를 가져올 수 있음
 - querySelectorAll(Tag... Use Css notation): 여러 항목(배열행태로)을 가져옴
 

 */