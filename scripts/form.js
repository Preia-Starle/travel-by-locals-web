let click = document.getElementById("submit");
if (click) click.addEventListener("click", addData);


let arr = new Array();

function addData(event) {
    event.preventDefault();
    document.getElementById("form").reset();
    arr.push( {
        username: document.getElementById("username").value,
        interests: document.getElementById("interests").value,
        about_me: document.getElementById("about-me").value,
        activity_type: document.getElementById("activities").value,
        activity_description: document.getElementById("activity-description").value
    });
    localStorage.setItem("localData", JSON.stringify(arr));
    console.log("Submitted!");
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

        cell1.innerHTML = arr1[i].username;
        cell2.innerHTML = arr1[i].interests;
        cell3.innerHTML = arr1[i].about-me;
        cell4.innerHTML = arr1[i].activities;
        cell5.innerHTML = arr1[i].activity_description;
    }}

});

