let input = document.querySelector("h1");
let keyCode = document.querySelector("#key-code");
let keyHistory = document.querySelector("#key-history");

//audio effect
function playSound(){
const sound = new Audio("./ATM-audio.wav");
sound.play();
}
document.addEventListener("keypress",(e)=>{
    console.log(e);
    playSound();
    input.innerHTML = `You have pressed &nbsp <span> ${e.code} </span>`;
    keyCode.innerHTML = `Key Code : ${e.charCode} `;
    keyCode.style.display = "block";
    keyHistory.innerHTML += `<li> ${e.code} </li>`;
    keyHistory.style.display = "block";
})

