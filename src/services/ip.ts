import axios from 'axios'

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY
const BASE_URL = 'https://geo.ipify.org/api/v2/country,city'

export async function getIpLocation() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        ipAddress: '',
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching IP location:', error)
    return null
  }
}
