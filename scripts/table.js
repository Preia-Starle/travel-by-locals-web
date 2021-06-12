let clear = document.getElementById("clear");
if (clear) clear.addEventListener("click", clearData)

function clearData() {
  window.localStorage.clear();
  window.location.replace("./index.html");
};

let addButton = document.getElementById("addPlace");
if (addButton) addButton.addEventListener("click", formRedirect)

function formRedirect() {
  window.location.replace("./form.html");
};

let arr1 = new Array();

function displayResults() {
  arr1 = JSON.parse(localStorage.getItem("localData"));
  let results = document.getElementById("results");
  results.innerHTML = "";
  for (let i = 0; i < arr1.length; i++) {
    results.innerHTML +=
      `<div class="result" id="result"> 
            <table class="table" id="table"> 
            <tr id="data"> 
                    <td>Username:</td> 
                    <td>My City:</td> 
                    <td>Profile Picture:</td> 
                    <td>Interests:</td> 
                    <td>About Me:</td> 
                    <td>Type Of Activity:</td> 
                    <td>Venue Name:</td> 
                    <td>Activity Description:</td>
                    <td>Pictures:</td> 
                </tr> 
                <tr>
                    <td> ${arr1[i].username} </td> 
                    <td> ${arr1[i].city} </td> 
                    <td> ${arr1[i].profile_picture} </td> 
                    <td> ${arr1[i].interests} </td> 
                    <td> ${arr1[i].about_me} </td> 
                    <td> ${arr1[i].activity_type} </td> 
                    <td id="venueInput${[i]}"> ${arr1[i].venue} </td> 
                    <td> ${arr1[i].activity_description} </td> 
                    <td> ${arr1[i].pictures} </td>
                </tr> 
            </table> 
            <div class="maps" style="overflow:hidden; position: relative; height: 500px;width: 500px;" id="map${[i]}">
            </div> 
                <span class="material-icons" id="delete" onclick="deletePopUp(${[i]})">clear</span>
                <span class="material-icons" id="edit" onclick="editItem(${[i]})">create</span>
                <div class="modal" id="modal${[i]}">
                <div class="modalContent">
                <span class="material-icons" id="closeBtn${[i]}">clear</span>
                <p>Are you sure you wanna delete this?</p>
                    <button class="mdc-button mdc-button--raised" onclick="deleteItem(${[i]})">Yes</button>
                    <button class="mdc-button mdc-button--raised" onclick="pageRefresh()">No</button>  
                </div>
            </div>
        </div>`;
    let venue = document.getElementById("venueInput" + i).innerHTML;
    if (venue) {
      setTimeout(function () {
        initMap(venue, i);
      }, 1000 * i)
    };
  }
}
        
window.addEventListener('DOMContentLoaded', (event) => {
  displayResults();
})


let map;

function initMap(venue, i) {
  let mapId = "";
  let geocoder = new google.maps.Geocoder();
  let markersArr = [];
  mapId = document.getElementById("map" + i) || [];
  map = new google.maps.Map(mapId, {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
  });
  geocoder.geocode({ address: venue }, function (results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      markersArr = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason:" + status);
    }
  })
}


function deletePopUp(i) {
  let modal = document.getElementById("modal" + i);
  let closeBtn = document.getElementById("closeBtn" + i);
  modal.style.display = "block";
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }
}

function deleteItem(i) {
  arr1 = JSON.parse(localStorage.getItem("localData"));
  arr1.splice(i, 1);
  localStorage.setItem("localData", JSON.stringify(arr1));
  displayResults();
}

function pageRefresh() {
  window.location.reload();
}

function editItem(i) {
  arr1 = JSON.parse(localStorage.getItem("localData"));
  let itemToEdit = arr1[i];
  arr1.splice(i, 1);
  localStorage.setItem("localData", JSON.stringify(arr1));
  let usernameToEdit = itemToEdit.username;
  let cityToEdit = itemToEdit.city;
  let interestsToEdit = itemToEdit.interests;
  let aboutMeToEdit = itemToEdit.about_me;
  let activityTypeToEdit = itemToEdit.activity_type;
  let venueToEdit = itemToEdit.venue;
  let activityDescriptionToEdit = itemToEdit.activity_description;
  window.location.href = `./form.html?username=${usernameToEdit}&city=${cityToEdit}&interests=${interestsToEdit}&about_me=${aboutMeToEdit}&activity_type=${activityTypeToEdit}&venue=${venueToEdit}&activity_description=${activityDescriptionToEdit}`;
}