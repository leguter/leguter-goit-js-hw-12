import axios from "axios";
export async function searchImg(value) {
    axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44349742-ecc8a7b60aea5585f0c207813',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get('/api/', { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
searchImg('dog')
