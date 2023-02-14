//code for digital clock functionality

let hoursEl = document.querySelector(".hours")
let minutesEl = document.querySelector(".minutes")
let secondsEL = document.querySelector(".seconds")
let ampmEl = document.querySelector("#ampm")

function updateTime(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    ampmEl= "AM"

    if(hours > 12){
        hours -= 12
        ampm = "PM"
    }

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    
    hoursEl.innerHTML= hours
    minutesEl.innerHTML= minutes
    secondsEL.innerHTML= seconds


    //setTimeOut function
    setTimeout(()=>{
        updateTime()
    }, 1000)
}
updateTime()

