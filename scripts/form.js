let click = document.getElementById("submit");
if (click) click.addEventListener("click", addData);

let arr = new Array();
let oldArr = new Array();

function addData(event) {
    event.preventDefault();
    let oldArr = JSON.parse(localStorage.getItem("localData")) || []; 
    arr.push( {
        username: document.getElementById("username").value,
        city: document.getElementById("city").value,
        interests: document.getElementById("interests").value,
        about_me: document.getElementById("about_me").value,
        activity_type: document.getElementById("activities").value,
        venue: document.getElementById("venue").value,
        activity_description: document.getElementById("activity_description").value
    });
    if (arr.length > 0) {
        oldArr.push(arr[0]);
    };
    localStorage.setItem("localData", JSON.stringify(oldArr));
    document.getElementById("form").reset();
    successPopUp();
    setTimeout(function() { window.location.replace("./table.html");
    }, 2000);
    };

let input = document.getElementById('venue');
if(input) input.addEventListener("click", initVenue);

function initVenue() {
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
        let place = autocomplete.getPlace();
    });
    };
      
function successPopUp() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};


function getData(){
    let str = localStorage.getItem("localData");
    if (str!= null) {
        arr = JSON.parse(str);
    }
}

function deleteData() {
    localStorage.clear();
}

window.addEventListener('DOMContentLoaded', (event) => {
    loadPreviousInput();
        });


function getUrlParameter(sParam) {
        let sPageURL = window.location.search.substring(1);
        let sURLVariables = sPageURL.split('&');
        for (let i = 0; i < sURLVariables.length; i++) {
                let parameterName = sURLVariables[i].split('=');
                if (parameterName[0] == sParam)  {
                    return parameterName[1];
                }
            }
        }

function loadPreviousInput() {
    let username = getUrlParameter("username");
    document.getElementById("username").value = username;
    let city = getUrlParameter("city");
    document.getElementById("city").value = city;
    let interests = getUrlParameter("interests");
    document.getElementById("interests").value = interests;
    let aboutMe = getUrlParameter("about_me");
    document.getElementById("about_me").innerHTML = aboutMe;
    let activityType = getUrlParameter("activity_type");
    document.getElementById("activities").value = activityType;
    let venue = getUrlParameter("venue");
    document.getElementById("venue").value = venue;
    let activityDescription = getUrlParameter("activity_description");
    document.getElementById("activity_description").innerHTML = activityDescription;
}