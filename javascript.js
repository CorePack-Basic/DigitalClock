let hours = document.querySelector(".hrs");
let minutes = document.querySelector(".mins");
let seconds = document.querySelector(".secs");



    setInterval(() => {
        let time = new Date()
        hours.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
        minutes.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
        seconds.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
    });


let speech = new SpeechSynthesisUtterance()