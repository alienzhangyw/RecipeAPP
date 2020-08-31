import axios from 'axios';
export const get = ({ url }) => {
  return axios({
    method: 'GET',
    url
  }).then((ok) => {
    return ok.data;
  }).catch((err) => {
    return err.message;
  })
}