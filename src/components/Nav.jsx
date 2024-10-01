import React, { useRef, useEffect } from "react";
import fetchPrayerTimes from "./../hooks/API"; // Assuming you have a function for fetching the prayer times
import cities from "../data/cities.json"; // Assuming cities is a JSON file with city data

const Navbar = ({ setData }) => {
  const currentYear = new Date().getFullYear();
  const currentMonthInitial = new Date().getMonth() + 1; // getMonth() returns 0-indexed month, so add 1

  // Refs for accessing select elements
  const monthSelectRef = useRef(null);
  const yearSelectRef = useRef(null);
  const citySelectRef = useRef(null);

  // List of months
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // Generates months from 1 to 12

  // Generate a list of years (50 years back up to the current year)
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 19 + i); // Generates years from (currentYear - 19) to currentYear

  // Function to fetch prayer times based on selected values
  const fetchTimesOnChange = async () => {
    const selectedMonth = monthSelectRef.current.value;
    const selectedYear = yearSelectRef.current.value;
    const selectedCity = citySelectRef.current.value;

    // Call the API or your function to fetch prayer times
    setData(await fetchPrayerTimes(selectedCity, selectedMonth, selectedYear));
  };

  // useEffect to fetch data when the component mounts or when the select values change
  useEffect(() => {
    fetchTimesOnChange(); // Call the function to fetch data
  }, [currentMonthInitial, currentYear]); // This will run when the component mounts and when the current year or month changes

  return (
    <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 relative">
      {/* Logo Section */}
      <div className="w-28 mb-4 md:mb-0">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-md"
        />
      </div>

      {/* Month Selector */}
      <div className="mb-4 md:mb-0">
        <select
          ref={monthSelectRef}
          id="months"
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-md"
          defaultValue={currentMonthInitial}
          onChange={fetchTimesOnChange} // Fetch on change
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Year Selector */}
      <div className="mb-4 md:mb-0">
        <select
          ref={yearSelectRef}
          id="years"
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-md"
          defaultValue={currentYear}
          onChange={fetchTimesOnChange} // Fetch on change
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* City Selector */}
      <div className="mb-4 md:mb-0">
        <select
          ref={citySelectRef}
          id="cities"
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-md"
          defaultValue={cities.cities[0]}
          onChange={fetchTimesOnChange} // Fetch on change
        >
          {cities.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Title Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-3 px-6 flex justify-center items-center rounded-3xl shadow-lg text-center mb-4 md:mb-0">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          مؤقت الصلوات الخمس
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
