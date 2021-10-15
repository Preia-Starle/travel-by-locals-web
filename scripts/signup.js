document.getElementById("submitRegAjax").onclick = function(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let myCity = document.getElementById("city").value;
  let interests = document.getElementById("interests").value;
  let aboutMe = document.getElementById("about_me").value;
  const data = {
    "Username": username, 
    "MyCity": myCity, 
    "Interests": interests, 
    "AboutMe": aboutMe
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://expressnodeapptest.azurewebsites.net:443/users');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
};
