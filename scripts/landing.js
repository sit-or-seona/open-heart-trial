function getTime () {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const time = hours+":"+minutes
    document.getElementById("time").innerText = time;
} getTime();
setInterval(getTime, 1000);