
let video = document.getElementById('bicycle-japan');
let videoDiv = document.getElementById('video-div');
let introSong = document.getElementById('intro-song');

window.onload = function () {
  document.getElementById("video-div").addEventListener("mouseenter", function () {
    document.getElementById("bicycle-japan").play();
  });

  document.getElementById("video-div").addEventListener("mouseleave", function () {
    document.getElementById("bicycle-japan").pause();
  });

  document.getElementById('video-div').addEventListener("mouseenter", function () {
    document.getElementById("intro-song").play();
  });

  document.getElementById('video-div').addEventListener("mouseleave", function () {
    document.getElementById("intro-song").pause();
  });
};



