let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small]");

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("dddd Do MMMM YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format(
  "h:mm:ss [<small>]A[</small]"
);

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("dddd Do MMMM YYYY");
tokyoElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");
