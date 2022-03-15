import Axios from 'axios';

const ApiGrover = Axios.create({
  baseURL: process.env.PUBLIC_BASEURL,
  timeout: 0
});

export default ApiGrover;