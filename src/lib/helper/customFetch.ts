// lib/fetcher.js
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://royalgames.test:8000/api';
const AUTHOR_TOKEN = process.env.NEXT_PUBLIC_AUTHORIZE_TOKEN || '';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const customFetch = async (url: string, options: FetchOptions = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        Authorization: AUTHOR_TOKEN,
      },
    });
    // console.log('response', response);
    if (response.status === 401) {
      const errorData = { message: 'Unauthorized', status: 401 };
      return errorData;
    }

    if (!response.ok) {
      const errorData = { message: 'Error', status: response.status };
      return errorData;
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
};
