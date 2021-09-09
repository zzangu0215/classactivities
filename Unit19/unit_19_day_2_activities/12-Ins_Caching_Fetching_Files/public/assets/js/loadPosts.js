loadPosts();

function createEl(htmlString = '', className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute('class', className);
  }
  return el;
}

function loadPosts() {
  fetch('/api/posts')
    .then((res) => res.json())
    .then((data) => createCards(data))
    .catch((err) => console.log(err));
}

function createCards(data) {
  const container = document.getElementsByClassName('container')[0];
  container.innerHTML = '<h4 class="text-center mt-2" id="status"></h4>';
  let lastRow;
  const row = createEl('div', 'row');

  return data.forEach(function (post, index) {
    const col = createEl('div', 'col-md-4 mt-4');
    col.appendChild(createCard(post));
    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}

function createCard(post) {
  const card = createEl('div', 'card');

  const imageContainer = createEl('div', 'card__image-container');
  const img = createEl('img', 'card-img-top card__image--cover');
  img.setAttribute('src', `/assets/images/${post.title}-icon.png`);
  img.setAttribute('alt', post.title);
  imageContainer.appendChild(img);

  const cardBody = createEl('div', 'card-body');
  const cardText = createEl('h3', 'card-text font-weight-bold mt-2');
  cardText.innerText = `${post.title}`;

  const cardDescription = createEl('p', 'card-text font-weight-bold mt-2');
  cardDescription.innerText = `${post.description}`;

  const likeButton = createEl('button', 'btn');
  likeButton.setAttribute('id', post._id);
  likeButton.setAttribute('data-likes', post.likes);
  likeButton.innerHTML =
    '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Like';
  likeButton.addEventListener('click', incrementLikes);

  const likeText = createEl('div', 'card-text text-center mt-5');
  likeText.setAttribute('id', `likes-count-${post._id}`);
  likeText.innerText = `Likes: ${post.likes}`;

  cardBody.appendChild(imageContainer);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(likeButton);
  cardBody.appendChild(likeText);

  card.appendChild(cardBody);

  return card;
}

// This function is called whenever a user clicks a like button for one of the
// posts.
function incrementLikes(event) {
  const statusEl = document.querySelector('#status');

  // increment the data-likes attribute by 1
  const id = event.currentTarget.getAttribute('id');
  const oldLikes = parseFloat(event.currentTarget.getAttribute('data-likes'));
  const likes = oldLikes + 1;

  event.currentTarget.setAttribute('data-likes', likes);

  statusEl.innerText = '';

  // call function to send a request to update likes for the post
  incrementLikesRequest(id, likes)
    .then(() => {
      // Display a message to let the user know the like was updated
      // successfully on the server.
      statusEl.innerText = 'Save successful!';
      updateLikesDisplay(id, likes, true);
    })
    .catch(() => {
      // Display a message letting the user know that the like cannot be updated
      // while offline.
      statusEl.innerText =
        "Sorry, your 'like' cannot be recorded while you are offline.";
      updateLikesDisplay(id, likes, false);
    });
}

// This function sends a request to the backend to update the number of likes
// for a post.
function incrementLikesRequest(id, likes) {
  return fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ likes }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// Indicate to the user whether or not the likes count is up to date.
function updateLikesDisplay(id, likes, saved) {
  const likesCount = document.querySelector(`#likes-count-${id}`);
  likesCount.innerText = `Likes: ${likes}`;
  if (!saved) {
    likesCount.innerText += ' (not saved)';
  }
}
