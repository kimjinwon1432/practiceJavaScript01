const a ='5'; // const: can not change value
let b=5; // let: can change value
let myName="jinwon";

console.log(a+2);
console.log(a*2);
console.log(a/3);

console.log(b);
b=10;

console.log(b)

myName+="123"; //
console.log(myName)

//boolean
let boolean = true;
if(boolean){ console.log(true,"hihihi");}
else{ console.log(false,"byebye");}

const mon="mon";
const days=["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(days);
console.log(days.pop());

console.log(days);
console.log("------");

console.log(days.push('sun'));
console.log(days);
console.log(days.unshift('sun'));

console.log(days);

let player=[{name:'kij',point:0,handsome:false,fat:"little bit"},
            {name:'adj',point:10,handsome:true,fat:"thin"}];

console.log(player);

console.log(player[0].name);

console.log(player[1].fat);
let testA=[];

let obj = new Object();
obj.name = 5;
obj.id = 6;
testA.push(obj);
console.log("testA",testA);
console.log(testA[0]["name"],testA[0]["id"]);
//object... property를 가진 데이터를저장.
const players={
    name: "kjw",
    points: 11,
    handsome: true,
    sayHello: function(otherPersonsName) {
        console.log("HHeelloooooooooooooooo " + otherPersonsName);
    }
};

console.log(players);
console.log(players.name, players.points, players.handsome);
players.koreanName="토마토"; // add on object to koreanName
players.points = 15;
console.log(players);
const aa = 10;
console.log(aa);

function sayHello(){
    console.log("hello");
}

sayHello();
players.sayHello('soon');


function plus(a,b){
    return a+b;
}

let kk = 0;
kk=plus(10+1);
console.log(kk);
let aaa={a:'',b:'',c:0};
console.log(aaa);
aaa=10;
console.log(aaa);

const toBuy=['tt', 'pp', 'kk'];

console.log(toBuy);
toBuy[2]='aa';
console.log(toBuy); 

let ttoB=['tt', 'pp', 'kk'];
console.log('aaaaaaa', ttoB);
ttoB=100;
console.log(ttoB);  

//계산기
const calculator ={
    add: function(a, b){ 
        return a+b;
    },
    minus: function(a,b){ 
        return a-b;
    },
    multi: function(a,b){ 
        return a*b;
    },
    div: function(a,b){ 
        return a/b;
    },
    power: function(a,b){ 
        return a**b;
    },
    
};

const plusResult = calculator.add(10,10);
const minusResult = calculator.minus(plusResult,400);
const multiResult = calculator.multi(4,minusResult);
const divResult = calculator.div(multiResult, plusResult);
const powerResult = calculator.power(divResult, minusResult);

const age = 96;
function calculateKrAge(ageOfForeginer){
    return ageOfForeginer + 2;
}

const krAge= calculateKrAge(age);
console.log("krAge:",krAge,"hihi");

//old method.... newly makes one self 
let age2 = parseInt(prompt("How old are you?")); //pauseing javascript execution
//change type..
console.log(typeof parseInt(age2), typeof age2);
//console.log(typeof age2);

const age3= parseInt("15");
const kik=parseInt("kakakakak");

console.log(age3, kik);

if(isNaN(age2)||age2===null||age2<0){
    console.log("Please write a real positive number");
    age2 = prompt("How old are you?"); //pauseing javascript execution
} else if(age2<18){
    console.log("You are too young");
} else if( age2 >=18 && age2 <=50) {
    console.log("You can Drink");
} else if(age2 >50 && age2 <=80){
  console.log("You should exercise"); 
} else if(age2 > 80){
    console.log("You can do whatever you want");
}