import axios from 'axios';

const API_KEY = 'wlnbYQtNbOpB2KniXxms8mOt0lnaBKa0k_0gavU0ESw';
const BASE_URL = 'https://api.unsplash.com/';

const unsplashApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const searchPhotos = async (query) => {
  try {
    const response = await unsplashApi.get('search/photos', {
      params: {
        query: query,
        per_page: 10
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching photos from Unsplash API');
  }
};
