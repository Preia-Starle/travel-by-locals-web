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
            <tr><td class="leftCell">Username:</td><td class="rightCell"> ${arr1[i].username} </td><td id="edit_delete"><span class="material-icons" id="edit" onclick="editItem(${[i]})">create</span><span class="material-icons" id="delete" onclick="deletePopUp(${[i]})">clear</span></td></tr> 
            <tr><td class="leftCell">My City:</td><td class="rightCell"> ${arr1[i].city} </td></tr>
            <!--<tr><td class="leftCell">Profile Picture:</td><td class="rightCell"> ${arr1[i].profile_picture} </td></tr>--> 
            <tr><td class="leftCell">Interests:</td><td class="rightCell"> ${arr1[i].interests} </td></tr> 
            <tr><td class="leftCell">About Me:</td><td  class="rightCell"style="text-overflow: ellipsis; white-space: normal; word-break: break-all"> ${arr1[i].about_me} </td></tr> 
            <tr><td class="leftCell">Type Of Activity:</td><td class="rightCell"> ${arr1[i].activity_type} </td></tr> 
            <tr><td class="leftCell">Venue Name:</td><td class="rightCell" id="venueInput${[i]}"> ${arr1[i].venue} </td></tr> 
            <tr><td class="leftCell">Activity Description:</td><td class="rightCell" style="text-overflow: ellipsis; white-space: normal; word-break: break-all"> ${arr1[i].activity_description} </td></tr> 
            <!--<tr><td>Pictures:</td><td class="rightCell"> ${arr1[i].pictures} </td></tr>--> 
            </table>
            <div class="maps" style="overflow:hidden; position: relative; width: 100%; height: 37rem" id="map${[i]}">
            </div> 
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
  formModal.style.display = "block";
  arr1 = JSON.parse(localStorage.getItem("localData"));
  let itemToEdit = arr1[i];
  let usernameToEdit = itemToEdit.username;
  if (usernameToEdit) { document.getElementById("usernameModal").value = usernameToEdit };
  let cityToEdit = itemToEdit.city;
  if (cityToEdit) { document.getElementById("cityModal").value = cityToEdit };
  let interestsToEdit = itemToEdit.interests;
  if (interestsToEdit) { document.getElementById("interestsModal").value = interestsToEdit };
  let aboutMeToEdit = itemToEdit.about_me;
  if (aboutMeToEdit) { document.getElementById("about_meModal").innerHTML = aboutMeToEdit };
  let activityTypeToEdit = itemToEdit.activity_type;
  if (activityTypeToEdit) { document.getElementById("activitiesModal").value = activityTypeToEdit };
  let venueToEdit = itemToEdit.venue;
  if (venueToEdit) { document.getElementById("venueModal").value = venueToEdit };
  let activityDescriptionToEdit = itemToEdit.activity_description;
  if (activityDescriptionToEdit) { document.getElementById("activity_descriptionModal").innerHTML = activityDescriptionToEdit };

  let cancelEditBtn = document.getElementById("cancelModal");
  cancelEditBtn.onclick = function (e) {
    e.preventDefault();
    formModal.style.display = "none";
  }

  let submitModal = document.getElementById("submitModal");
  submitModal.onclick = function (e) {
    e.preventDefault();
    replaceData(i);
    formModal.style.display = "none";
    displayResults();
  }
}

let inputModal = document.getElementById("venueModal");
if (inputModal) inputModal.addEventListener("click", initVenueModal);

function initVenueModal() {
  let autocomplete = new google.maps.places.Autocomplete(inputModal);
  autocomplete.addListener('place_changed', function () {
    let place = autocomplete.getPlace();
  });
};

function replaceData(i) {
  deleteItem(i);
  arr1.unshift({
    username: document.getElementById("usernameModal").value,
    city: document.getElementById("cityModal").value,
    interests: document.getElementById("interestsModal").value,
    about_me: document.getElementById("about_meModal").value,
    activity_type: document.getElementById("activitiesModal").value,
    venue: document.getElementById("venueModal").value,
    activity_description: document.getElementById("activity_descriptionModal").value
  });
  if (arr1.length > 0) {
    localStorage.setItem("localData", JSON.stringify(arr1));
  };
};


 

