var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

window.addEventListener("load", function() {
    video = document.getElementById("player1");

    video.autoplay = false;

    video.loop = false;

    console.log("Video initialized. Autoplay and looping are disabled.");
});

document.getElementById("play").addEventListener("click", function () {
	video.play();
	
	var volumeInfo = document.getElementById("volume");
	volumeInfo.textContent = video.volume * 100 + "%";
});

document.getElementById("pause").addEventListener("click", function () {
    video.pause();
});
