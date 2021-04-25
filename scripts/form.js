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
    if (oldArr.length > 0) {
        arr.push(oldArr[0]);
    };
    localStorage.setItem("localData", JSON.stringify(arr));
    document.getElementById("form").reset();
    successPopUp();
    setTimeout(function() { window.location.replace("./table.html");
    }, 0);
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