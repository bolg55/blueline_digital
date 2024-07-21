import type { StrapiProps } from '../interfaces/StrapiProps';

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch data from
 * @param query - Optional query parameters
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - Whether the response is a list
 * @returns
 */

export const fetchApi = async <T>({
  endpoint,
  query,
  page,
  wrappedByKey,
  wrappedByList,
}: StrapiProps): Promise<T> => {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  if (page) {
    url.searchParams.append(`populate[${page}][populate]`, '*');
  }

  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  if (page) {
    data = data[0]['attributes'][page];
  }

  return data as T;
};
