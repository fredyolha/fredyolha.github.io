var showTime = true;
var updateInterval = 1000;

function updateTimeDate(){
    if(showTime){
        $("#time-element").text(new Date().toLocaleTimeString());
    } else {
        $("#time-element").text(new Date().toLocaleDateString());
    }
    
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
updateTimeDate();
setInterval(updateTimeDate, updateInterval);