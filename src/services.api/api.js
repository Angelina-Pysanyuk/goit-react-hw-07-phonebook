import axios from 'axios';

const BASE_URL = 'https://6427f0b6161067a83b03b105.mockapi.io/';

export const requestContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}contacts`);
  return data;
};

export const postContacts = async newContact => {
  const { data } = await axios.post(`${BASE_URL}contacts`, newContact);
  return data;
};

export const removeContacts = async contactId => {
  const { data } = await axios.delete(`${BASE_URL}contacts/${contactId}`);
  return data;
};
