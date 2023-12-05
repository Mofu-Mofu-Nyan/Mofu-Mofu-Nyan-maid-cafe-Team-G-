var video = document.getElementById("syamuVideo");
var btn = document.getElementById("syamuButton");

function syamuScript() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}