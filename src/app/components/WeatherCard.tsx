/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

// hook(s)
import { useTemperature } from '../hooks/useTemperature';

type WeatherCardProps = {
  weatherData: {
    temperature: number;
    condition: string;
    icon: string;
  } | null;
};

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  const { temperature, unit, toggleUnit } = useTemperature(weatherData?.temperature ?? 0);

  // null check / error
  if (!weatherData) {
    return <p className="text-gray-500 font-sans">Enter a city to fetch weather data.</p>;
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-4/5 max-w-sm p-8 rounded-lg shadow-2xl border border-gray-300 text-center bg-gradient-to-br from-blue-100 to-blue-300"
    >
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className="text-gray-800 text-sm font-medium">
          {unit === 'C' ? 'C°' : 'F°'}
        </span>
        <div
          className="relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition"
          onClick={toggleUnit}
        >
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition ${
              unit === 'F' ? 'translate-x-6' : ''
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <span>Current Conditions:</span>
        <span className="text-gray-800 text-lg font-sans font-semibold drospan-shadow-md">
          {weatherData.condition}
        </span>
        <img
          src={`https:${weatherData.icon}`}
          alt={weatherData.condition}
          className="w-40 h-40"
        />
        <h2 className="text-gray-800 text-5xl font-bold font-sans drop-shadow-md">
          {temperature.toFixed(1)}°{unit}
        </h2>
      </div>
    </motion.div>
  );
}
