// components
import InputForm from './components/InputForm'
import WeatherCard from './components/WeatherCard'

const mockWeatherData = {
  temperature: 72.5, // temp
  condition: "Partly Cloudy", // weather condition text
  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png", // weather icon url for ph
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <InputForm />
      <WeatherCard weatherData={mockWeatherData}/>
    </div>
  )
}
