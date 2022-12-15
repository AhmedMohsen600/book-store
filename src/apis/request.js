import axios from 'axios';

export const postData = async (url = '', data = {}) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const deleteBook = async (url, id) => {
  try {
    const response = await axios.delete(`${url}/${id}`, { item_id: id });
    return response.data;
  } catch (error) {
    return error.message;
  }
};
