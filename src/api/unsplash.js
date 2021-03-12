import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WGYm1KAd29kz8gSbrSZMWUP0rjvpGeJkL1EeuysPW5o',
  },
});
