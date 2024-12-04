import axios from "axios";

const API_KEY = 'at_3pntRvFbB8ecWXOviPS6YU7ra38ne';
const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

export async function getIpLocation (ipAddress: string) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        ipAddress: ipAddress || ''
      }
    })
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching IP location:', error)
    return null;
  }
}
