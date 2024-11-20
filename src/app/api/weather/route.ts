import { NextResponse } from 'next/server';

const WEATHER_API_URL = 'http://api.weatherapi.com/v1/current.json';
const WEATHER_API_KEY = '95cad91b0a7940519e3152027242011';

// curl "http://localhost:3000/api/weather?city=London"
/*
{
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.5171,
    lon: -0.1062,
    tz_id: 'Europe/London',
    localtime_epoch: 1732119422,
    localtime: '2024-11-20 16:17'
  },
  current: {
    last_updated_epoch: 1732119300,
    last_updated: '2024-11-20 16:15',
    temp_c: 2,
    temp_f: 35.6,
    is_day: 0,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
      code: 1003
    },
    wind_mph: 9.8,
    wind_kph: 15.8,
    wind_degree: 317,
    wind_dir: 'NW',
    pressure_mb: 1009,
    pressure_in: 29.8,
    precip_mm: 0,
    precip_in: 0,
    humidity: 75,
    cloud: 25,
    feelslike_c: -2.1,
    feelslike_f: 28.2,
    windchill_c: -0.3,
    windchill_f: 31.5,
    heatindex_c: 3.5,
    heatindex_f: 38.2,
    dewpoint_c: -3.1,
    dewpoint_f: 26.4,
    vis_km: 10,
    vis_miles: 6,
    uv: 0,
    gust_mph: 14.6,
    gust_kph: 23.5
  }
} weatherData ***
 GET /api/weather?city=London 200 in 399ms
 ✓ Compiled in 108ms (642 modules)
 GET / 200 in 46ms
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json(
      { error: 'City name is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${city}&aqi=no`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch weather data' },
        { status: response.status }
      );
    }

    const weatherData = await response.json();
    console.log(weatherData, 'weatherData ***')
    return NextResponse.json({
      temperature: weatherData.current.temp_c, // celsius
      condition: weatherData.current.condition.text, // current temp
      icon: weatherData.current.condition.icon, // any related icon
    });
  } catch (error) {
    console.error(error, '*** error');
    return NextResponse.json(
      { error: 'An error occurred while fetching weather data' },
      { status: 500 }
    );
  }
}