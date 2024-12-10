export interface Location {
  ip: string;
  location: {
    city: string;
    region: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}
