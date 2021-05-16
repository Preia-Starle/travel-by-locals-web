let clear = document.getElementById("clear");
if(clear) clear.addEventListener("click", clearData)

function clearData() {
    window.localStorage.clear();
    window.location.replace("./index.html");
};

let addButton = document.getElementById("addPlace");
if(addButton) addButton.addEventListener("click", formRedirect)

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
          `<div class="result"> 
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
            <div class="maps" style="overflow:hidden; position: relative; height: 500px;width: 500px;" id="map${[i]}">
            </div> 
                <span class='material-icons' id='delete'>clear</span> 
                <span class='material-icons' id='edit'>create</span> 
        </div>`;
        let venue = document.getElementById("venueInput" + i).innerHTML;
        if(venue) {
          setTimeout(initMap(venue, i));  
            };
        };  
  };  
        
window.addEventListener('DOMContentLoaded', (event) => { 
  displayResults();
      }); 

let map;
const geocoder = new google.maps.Geocoder();

function initMap(venue, i) {
  let maps = document.getElementsByClassName("maps");
  let mapId = "";
  for(let i = 0; i < maps.length; i++) {
    setTimeout(function() {
    mapId = document.getElementById(maps[i].id);
    map = new google.maps.Map(mapId, {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
      })
      codeVenue(geocoder, map, venue);
    }, 2000 * i)
  }
  }


function codeVenue (geocoder, map, venue) {
  geocoder.geocode({address: venue}, function(results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
        });
        } else {
          alert("Geocode was not successful for the following reason:" + status);
          };
        })}