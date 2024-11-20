'use client'

import { useForm } from 'react-hook-form'

type FormData = {
  city: string
}

type InputFormProps = {
  onFetchWeather?: (params: { city: string }) => void
}

export default function InputForm({ onFetchWeather }: InputFormProps) {
  console.log(onFetchWeather, '*** verify passing')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  console.log(errors, 'errors ***')

  const onSubmit = (data: FormData) => {
    console.log(data, 'data ***')
    onFetchWeather?.({ city: data.city })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-4/5 max-w-md bg-white p-4 sm:p-8 rounded-lg shadow-lg space-y-4 sm:space-y-6"
    >
      <h2 className="text-xl sm:text-3xl font-semibold text-gray-800">
        Get Weather
      </h2>
      <div>
        <label className="block text-gray-600 text-sm">City Name</label>
        <input
          type="text"
          // register w react hook form - validations
          {...register('city', { required: 'City name is required' })}
          className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition"
      >
        Fetch Weather
      </button>
    </form>
  )
}
