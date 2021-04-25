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
        let cell9 = r.insertCell();

        cell1.innerHTML = arr1[i].username;
        cell2.innerHTML = arr1[i].city;
        cell3.innerHTML = arr1[i].profile_picture;
        cell4.innerHTML = arr1[i].interests;
        cell5.innerHTML = arr1[i].about_me;
        cell6.innerHTML = arr1[i].activity_type;
        cell7.innerHTML = arr1[i].venue;
        cell8.innerHTML = arr1[i].activity_description;
        cell9.innerHTML = arr1[i].pictures;
    }}

});