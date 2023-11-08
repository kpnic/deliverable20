let videoControl;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
    videoControl = document.getElementById("player1");
    videoControl.autoplay = false;
    videoControl.loop = false;
});

function updateVolume() {
	const volumeDisplay = document.getElementById("volume");
	volumeDisplay.innerText = `${Math.round(videoControl.volume * 100)}%`;
}

document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
    videoControl.play();
    updateVolume();
});

document.getElementById("pause").addEventListener("click", function () {
    console.log("Pause Video");
    videoControl.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Video");
	videoControl.playbackRate -= 0.1;
    console.log(`New speed: ${videoControl.playbackRate}`);
});

document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up Video");
    videoControl.playbackRate += (videoControl.playbackRate * 0.1);
    console.log(`New speed: ${videoControl.playbackRate}`);
});

document.getElementById("skip").addEventListener("click", function() {
    videoControl.currentTime += 10;
    if (videoControl.currentTime > videoControl.duration) {
        videoControl.currentTime = 0;
    }
    console.log(`Current location: ${videoPlayer.currentTime}`);
  });

  mute = document.getElementById("mute")
  mute.addEventListener("click", function() {
    if (videoControl.muted) {
        videoControl.muted = false;
      mute.innerText = "Mute";
    } else {
      videoControl.muted = true;
      mute.innerText = "Unmute";
    }
  });

  slider = document.getElementById("slider")
  slider.addEventListener("input", function() {
    videoControl.volume = slider.value / 100;
    updateVolume();
  });
  
document.getElementById("vintage").addEventListener("click", function () {
    videoControl.classList.add('oldSchool');
});

document.getElementById("orig").addEventListener("click", function() {
    videoControl.classList.remove('oldSchool');
});