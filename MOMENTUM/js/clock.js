//To show Time & date

const clock = document.querySelector("h2#clock");

//setInterval(sayHello, 5000);
//setTimeout(sayHello, 2000);

function getClock() {
  const date = new Date();
  let formatSeconds = ("0" + date.getSeconds()).slice(-2);
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let returnDay = days[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} (${returnDay})`;
  clock.innerText += `\n ${hours}:${minutes}:${seconds}`;
  // console.dir(typeof date.getSeconds())
  clock.getElementsByClassName.fontSize = "3rem";
}

getClock();
setInterval(getClock, 1000);
