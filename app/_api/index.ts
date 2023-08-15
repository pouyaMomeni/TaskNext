import axios from "axios";
const apiUrl = 'https://jsonplaceholder.org/'

export const getPosts = async () => {
  const data = await axios.get(`${apiUrl}posts`)
  return data
};
export const getComments = async () => {
  const data = await axios.get(`${apiUrl}comments`)
  return data
};