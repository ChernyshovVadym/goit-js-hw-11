const apiKey = '42467194-b110ad867f5196c7e5e9f8f90';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = query => {
  return fetch(
    `${BASE_URL}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal=horizontal&safesearch=true`
  ).then(respons => {
    if (!respons.ok) {
      return;
    }
    return respons.json();
  });
};

export default fetchImages;
