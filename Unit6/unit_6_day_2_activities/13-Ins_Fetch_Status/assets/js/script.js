var requestUrl = 'https://api.github.com/orgs/nodejs/repo?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(url) {
  fetch(url)
    .then(function (response) {
      console.log(response);
      // display the status
      
      responseText.textContent = response.status;
      // check the response status for success
      if (response.status === 200) {
        responseText.style.color = "green";
      } else {
        responseText.style.color = "red";
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(requestUrl);
