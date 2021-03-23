let click = document.getElementById("submit");
if (click) click.addEventListener("click", addData);

let arr = new Array();

function addData(event) {
    event.preventDefault();
    arr.push( {
        username: document.getElementById("username").value,
        city: document.getElementById("city").value,
        interests: document.getElementById("interests").value,
        about_me: document.getElementById("about_me").value,
        activity_type: document.getElementById("activities").value,
        activity_description: document.getElementById("activity_description").value
    });
    console.log(arr);
    localStorage.setItem("localData", JSON.stringify(arr));
    console.log("Submitted!");
    document.getElementById("form").reset();
    successPopUp();
    setTimeout(function() { window.location.replace("./table.html");
    }, 3000);
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
    let arr1 = new Array();
    arr1 = JSON.parse(localStorage.getItem("localData"));

    let tbl = document.getElementById("user");

    if (tbl) {
        for (i = 0; i < arr1.length; i++) {
        let r = tbl.insertRow();
        let cell1 = r.insertCell();
        let cell2 = r.insertCell();
        let cell3 = r.insertCell();
        let cell4 = r.insertCell();
        let cell5 = r.insertCell();
        let cell6 = r.insertCell();
        let cell7 = r.insertCell();
        let cell8 = r.insertCell();

        cell1.innerHTML = arr1[i].username;
        cell2.innerHTML = arr1[i].city;
        cell3.innerHTML = arr1[i].profile_picture;
        cell4.innerHTML = arr1[i].interests;
        cell5.innerHTML = arr1[i].about_me;
        cell6.innerHTML = arr1[i].activities;
        cell7.innerHTML = arr1[i].activity_description;
        cell8.innerHTML = arr1[i].pictures;
    }}

});



