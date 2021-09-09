fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', // GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
  //
  // You can learn about these options at
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
