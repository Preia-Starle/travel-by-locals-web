let click = document.getElementById("submit");
if (click) click.addEventListener("click", addData);

let arr = new Array();

function addData() {
    arr.push( {
        username: document.getElementById('username').value
        /*interests: document.getElementById('interest-choices').value,
        about_me: document.getElementById('about-me').value,
        activity_type: document.getElementById('activity-choices').value,
        activity_description: document.getElementById('activity-description').value*/
    });
    localStorage.setItem("localData", JSON.stringify(arr));
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

    for (i = 0; i < arr1.length; i++) {
        let r = tbl.insertRow();
        let cell1 = r.insertCell();
        let cell2 = r.insertCell();
        let cell3 = r.insertCell();
        let cell4 = r.insertCell();
        let cell5 = r.insertCell();

        cell1.innerHTML = arr1[i].username;
        cell2.innerHTML = arr1[i].interests;
        cell3.innerHTML = arr1[i].about_me;
        cell4.innerHTML = arr1[i].activity_type;
        cell5.innerHTML = arr1[i].activity_description;
    }

});

