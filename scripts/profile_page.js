//AJAX GET
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/users', true);

xhr.onload = function () {
  let arr1 = JSON.parse("data");
  let results = document.getElementById("results1");
  results.innerHTML = "";
  for (let i = 0; i < arr1.length; i++) {
    results.innerHTML +=
    `<div class="result" id="result"> 
            <table class="table" id="table"> 
            <tr><td class="leftCell">Username:</td><td class="rightCell"> ${arr1[i].username} </td><td id="edit_delete"><span class="material-icons" id="edit" onclick="editItem(${[i]})">create</span><span class="material-icons" id="delete" onclick="deletePopUp(${[i]})">clear</span><span class="material-icons" id="share">share</span></tr></td>
            <tr><td class="leftCell">My City:</td><td class="rightCell"> ${arr1[i].myCity} </td></tr>
            <!--<tr><td class="leftCell">Profile Picture:</td><td class="rightCell"> ${arr1[i].profile_picture} </td></tr>--> 
            <tr><td class="leftCell">Interests:</td><td class="rightCell"> ${arr1[i].interests} </td></tr> 
            <tr><td class="leftCell">About Me:</td><td  class="rightCell"style="text-overflow: ellipsis; white-space: normal; word-break: break-all"> ${arr1[i].about_me} </td></tr> 
            </table>`
  }
};
xhr.send(null);

