'use sctict';
export function searchPhotoByQuery(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45156529-f4caada2c6812495035285f69';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${URL}?${searchParams.toString()}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
