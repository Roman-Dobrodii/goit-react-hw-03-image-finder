import axios from 'axios';

const API_key = '19186547-e8c2926af7125cb35de57caef';

const imagesFetchApi = (input, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=${API_key}`,
    )
    .then(response => response.data.hits);
};

export default { imagesFetchApi };
