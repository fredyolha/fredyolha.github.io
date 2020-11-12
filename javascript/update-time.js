var showTime = true;
var updateInterval = 1000;
var holdingElement = document.querySelector("#time-element");
var clockInterval = setInterval(updateTimeDate, updateInterval);
let resMessage = "<i class='fas fa-desktop'></i> Resolution: ";

function updateTimeDate(){
    showTime ? displayTime() : displayDate();    
}

function displayTime(){
    holdingElement.innerHTML =  "<i class='far fa-clock'></i> " + new Date().toLocaleTimeString();
}

function displayDate(){
    holdingElement.innerHTML = "<i class='fas fa-calendar-alt'></i> " + new Date().toLocaleDateString();
}

function switchDisplay(){
    if(showTime){
        showTime = false;
    } else {
        showTime = true;
    }
    updateTimeDate();
}

function switchContent2(){
    holdingElement.innerHTML = resMessage + window.innerWidth + " x " + window.innerHeight;
}

updateTimeDate();
