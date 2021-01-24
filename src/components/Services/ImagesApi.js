import axios from 'axios';

const API_key = '19186547-e8c2926af7125cb35de57caef';

const imagesFetchApi = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_key}`,
    )
    .then(response => response.data.hits);
};

const api = { imagesFetchApi };

export default api;
