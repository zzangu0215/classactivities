var userContainer = document.getElementById("users");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  var requestUrl = "https://api.github.com/users?per_page=15";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML adding an <h3>
      // with the username and a <p> below it with the url.
      for (var i=0; i<data.length; i++) {
        var userNameEl = document.createElement('h3');
        var urlEl = document.createElement('p');
        var userName = data[i].login;
        var url = data[i].html_url;
        userNameEl.textContent = userName;
        urlEl.textContent = url;
        userContainer.append(userNameEl);
        userNameEl.append(urlEl);
      }
    });
}
fetchButton.addEventListener("click", getApi);
