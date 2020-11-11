var showTime = true;
var updateInterval = 1000;
var holdingElement = document.querySelector("#time-element");
var clockInterval = setInterval(updateTimeDate, updateInterval);

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
        updateInterval = 60000;
    } else {
        showTime = true;
        updateInterval = 1000;
    }
    updateTimeDate();
}

function switchContent(){
    clearInterval(clockInterval);
    holdingElement.innerHTML = "<i class='fas fa-desktop'></i> Screen width is " + window.innerWidth;
}

function switchContent2(){
    holdingElement.innerHTML = "<i class='fas fa-desktop'></i> Screen width is " + window.innerWidth;
}


updateTimeDate();
