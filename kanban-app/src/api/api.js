
import axios from 'axios';

// Replace this with the actual API endpoint
const API_URL = 'http://example.com/api/endpoint';

export const fetchTickets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return [];
  }
};
            