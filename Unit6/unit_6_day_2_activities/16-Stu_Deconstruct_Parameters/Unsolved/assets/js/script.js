fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per page limits how many are displayed in the array
// state=open is a search filter, looking for pages that have an open status
// sort=created will sort the objects in order they were created by date and time
// direction=desc is displaying the array in descending orders