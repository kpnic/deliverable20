var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#menu").addEventListener("click", function () {
    console.log("Video Muted");
    video.muted = true;
    slider.min = true;
});

document.querySelector("#vintage").addEventListener("click", function () {
    console.log("Old School!");
    document.querySelector("#vintage").innerHTML;
});
