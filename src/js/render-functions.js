const makeGalleryMarkup = hits => {
  return hits
    .map(
      ({
        webformatURL,
        tags,
        largeImageURL,
        views,
        comments,
        downloads,
        likes,
      }) => {
        return `<li><a href=${largeImageURL}> 
        <img src=${webformatURL} alt=${tags} width="300"></a>
        <div>
        <p>likes: ${likes}</p>
        <p>likes: ${downloads}</p>
        <p>likes: ${comments}</p>
        <p>likes: ${views}</p></div>
      </li>`;
      }
    )
    .join('');
};

export default makeGalleryMarkup;
