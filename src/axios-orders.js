import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-ziot-dev.firebaseio.com/'
});

export default instance;
