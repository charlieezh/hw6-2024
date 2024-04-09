var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.querySelector("#volume").innerHTML = `${Math.round(
    video.volume * 100
  )}%`;
});

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate = video.playbackRate * 0.9;
  console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate = video.playbackRate / 0.9;
  console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 > video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log(`Current Location is ${video.currentTime} seconds`);
});

document.querySelector("#mute").addEventListener("click", function () {
  if (video.volume === 0) {
    video.volume = 1;
    document.querySelector("#mute").innerHTML = "Mute";
  } else {
    video.volume = 0;
    document.querySelector("#mute").innerHTML = "Unmute";
  }
});

document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").innerHTML = `${Math.round(
    video.volume * 100
  )}%`;
});

document.querySelector("#vintage").addEventListener("click", function () {
  document.querySelector('.video').classList.add("oldSchool"); 
});

document.querySelector("#orig").addEventListener("click", function () {
  document.querySelector(".video").classList.remove("oldSchool"); 
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
