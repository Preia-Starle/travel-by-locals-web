
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


function showMenu() {
let dropdownContent = document.getElementById("dropdown_content");
dropdownContent.style.display = "block";
};

window.addEventListener("mouseup", function(event) {
  let dropdownContent = document.getElementById("dropdown_content");
  if(event.target != dropdownContent) {
    dropdownContent.style.display = "none";
  }
});

function showLeftMenu() {
  let dropdownContent = document.getElementById("right_dropdown");
  dropdownContent.style.display = "block";
  };

  window.addEventListener("mouseup", function(event) {
    let dropdownContent = document.getElementById("right_dropdown");
    if(event.target != dropdownContent) {
      dropdownContent.style.display = "none";
    }
  });


function loginPopUp() {
  let modal = document.getElementById("loginModal");
  let closeBtn = document.getElementById("close_btn");
  modal.style.display = "block";
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }
}

function createProfileRedirect() {
  let createProfileBtn = document.getElementById("btn-createProfile");
  createProfileBtn.onclick = function() {
    window.location.href = "./signup.html";
  }
  if (createProfileBtn.disabled === true) {
    alert("You need to sign up to create a profile. Click login button");
  } 
}



