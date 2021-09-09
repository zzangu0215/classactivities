var badRequestUrl = 'https://api.github.com/orgs/nodejs/repo?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      // Then write the conditional based on that response.status value
      responseText.textContent = response.status;
      // Make sure to look at the response in the console and read how 404
      // response is structured.
      if (response.status === 200) {
        responseText.style.color = "green";
      } else {
        responseText.style.color = "red";
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      var messageText = document.createElement('p');
      messageText.textContent = data.message;
      responseText.append(messageText);
    });
}

getApi(badRequestUrl);
