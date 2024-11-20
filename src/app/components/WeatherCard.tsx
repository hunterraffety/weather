/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'

// hook(s)
import { useTemperature } from '../hooks/useTemperature'

type WeatherCardProps = {
  weatherData: {
    temperature: number
    condition: string
    icon: string
  } | null
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  const { temperature, unit, toggleUnit } = useTemperature(
    weatherData?.temperature ?? 0
  )

  // null check / error
  if (!weatherData) {
    return (
      <p className="text-gray-500 font-sans">
        Enter a city to fetch weather data.
      </p>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-11/12 sm:w-4/5 max-w-sm p-4 sm:p-8 rounded-lg shadow-2xl border border-gray-300 text-center bg-gradient-to-br from-blue-100 to-blue-300"
    >
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-1 sm:space-x-2">
        <span className="text-gray-800 text-sm font-medium">
          {unit === 'C' ? 'C°' : 'F°'}
        </span>
        <div
          className="relative w-8 h-4 sm:w-12 sm:h-6 bg-gray-300 rounded-full cursor-pointer transition"
          onClick={toggleUnit}
        >
          <div
            className={`absolute top-1 left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-md transform transition ${
              unit === 'F' ? 'translate-x-6' : ''
            }`}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full space-y-2 sm:space-y-4">
        <span>Current Conditions:</span>
        <span className="text-gray-800 text-base sm:text-lg font-sans font-semibold drop-shadow-md">
          {weatherData.condition}
        </span>
        <img
          src={`https:${weatherData.icon}`}
          alt={weatherData.condition}
          className="w-24 h-24 sm:w-40 sm:h-40"
        />
        <h2 className="text-gray-800 text-3xl sm:text-5xl font-bold font-sans drop-shadow-md">
          {temperature.toFixed(1)}°{unit}
        </h2>
      </div>
    </motion.div>
  )
}
