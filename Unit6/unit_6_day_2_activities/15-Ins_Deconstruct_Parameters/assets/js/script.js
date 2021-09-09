// 1. Parameters are added after the "?"
// 2. Each parameter is a key value pair joined by an "=". In
//    "since=2020-06-01", "since" is the key and "2020-06-01" is the value.
// 3. Multiple parameters may be joined by placing "&" between each key=value pair.
fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
