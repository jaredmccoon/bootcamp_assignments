console.log("page loaded...");

const video = document.querySelector("video");


function over(element) {
    video.play();
    video.muted = true;
}

function out(element) {
    video.pause();
}