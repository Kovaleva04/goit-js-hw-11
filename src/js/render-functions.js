export function createImageCard(image) {
  const link = document.createElement('a');
  link.href = image.largeImageURL;

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;

  const likes = document.createElement('span');
  likes.textContent = `Likes: ${image.likes}`;

  const views = document.createElement('span');
  views.textContent = `Views: ${image.views}`;

  const comments = document.createElement('span');
  comments.textContent = `Comments: ${image.comments}`;

  const downloads = document.createElement('span');
  downloads.textContent = `Downloads: ${image.downloads}`;

  card.appendChild(img);
  card.appendChild(likes);
  card.appendChild(views);
  card.appendChild(comments);
  card.appendChild(downloads);

  link.appendChild(card);

  return link;
}

export function renderImages(images) {
  const fragment = document.createDocumentFragment();
  images.forEach(image => {
    const card = createImageCard(image);
    fragment.appendChild(card);
  });

  const gallery = document.querySelector('.gallery');
  gallery.appendChild(fragment);
}