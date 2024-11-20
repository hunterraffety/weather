import { useState } from 'react';

/**
 * hook for temperature conversion and toggle.
 * @param {number} initialCelsius // initial temp as parameter
 * @returns {{
 *   temperature: number,
 *   unit: 'C' | 'F',
 *   toggleUnit: () => void
 * }}
 */
export function useTemperature(initialCelsius: number) {
  const [unit, setUnit] = useState<'C' | 'F'>('F'); // lol celsius
  console.log(initialCelsius, 'before maths')
  // do some maths for me
  const temperature =
    unit === 'C' ? initialCelsius : (initialCelsius * 9) / 5 + 32;
    console.log(temperature, '*** temp', unit, '*unit ***')
  // toggle back and forth
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };
  // return vals we want to use and pass along setstate
  return { temperature, unit, toggleUnit };
}
