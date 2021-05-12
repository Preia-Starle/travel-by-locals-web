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

window.addEventListener('DOMContentLoaded', (event) => {
    let arr1 = new Array();
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
            <div class="map" style="position: relative;overflow: hidden;height: 500px;width: 500px;" id="map${[i]}">
            </div> 
                <span class='material-icons' id='delete'>clear</span> 
                <span class='material-icons' id='edit'>create</span> 
        </div>`;
        let venue = document.getElementById("venueInput" + i).innerHTML;
            if (venue) {
                initMap(venue, i);  
            } 
        };});

        const geocoder = new google.maps.Geocoder();
 

        function initMap(venue, i) {
            let map;
            map = new google.maps.Map(document.getElementById("map" + i), {
            zoom: 8,
            center: { lat: -34.397, lng: 150.644 },
          });
          codeVenue(geocoder, map, venue);
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
            }
          });
        }

        

       
                    
                

 
        