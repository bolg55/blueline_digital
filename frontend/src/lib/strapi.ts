import flattenAttributes from '../utils/flattenAttributes';

const authToken = import.meta.env.STRAPI_ADMIN_TOKEN;

export const fetchApi = async (url: string) => {
  console.log('fetchApi url:', url);
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, headers);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
    return flattenAttributes(data);
    // return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
