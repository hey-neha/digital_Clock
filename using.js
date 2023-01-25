function updateTime() {
    var dateTime  = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_or_pm = document.getElementById('am_pm');
if (hours>=12) {
    am_or_pm.innerHTML = "PM";
}
else{
    am_or_pm.innerHTML = "AM";
}

// 12 ke bad time shi de isiliye hai like : 13 na ho............
if (hours> 12) {
    hours = hours -12;
}


document.getElementById('hour').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

}
setInterval(updateTime,1000);