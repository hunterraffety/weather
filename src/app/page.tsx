'use client'

import InputForm from './components/InputForm'
import WeatherCard from './components/WeatherCard'
import { useState } from 'react'

// const mockWeatherData = {
//   temperature: 72.5, // temp
//   condition: "Partly Cloudy", // weather condition text
//   icon: "//cdn.weatherapi.com/weather/64x64/day/116.png", // weather icon url for ph
// };

export default function Home() {
  const [weatherData, setWeatherData] = useState<null | {
    temperature: number
    condition: string
    icon: string
  }>(null)
  const [loading, setLoading] = useState(false)
  console.log(loading, 'am i loading? ***')
  const handleWeatherFetch = async ({ city }: { city: string }) => {
    try {
      setLoading(true) // loading true
      const response = await fetch(`/api/weather?city=${city}`)
      console.log(response, 'response ***')
      if (!response.ok) throw new Error('Failed to fetch weather data')
      const data = await response.json()
      console.log(data, 'data ***')
      setWeatherData(data)
    } catch (error) {
      console.error(error)
      alert('Failed to fetch weather data. Please try again.')
    } finally {
      setLoading(false) // exit loading state
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200">
      <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 h-5/6 max-w-6xl rounded-3xl shadow-2xl overflow-hidden bg-white">
        {/* left */}
        <div className="flex-1 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
          <InputForm onFetchWeather={handleWeatherFetch} />
        </div>
        {/* primary weather card */}
        <div className="flex-1 flex items-center justify-center relative">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
            </div>
          ) : (
            <WeatherCard weatherData={weatherData} />
          )}
        </div>
      </div>
    </div>
  )
}
