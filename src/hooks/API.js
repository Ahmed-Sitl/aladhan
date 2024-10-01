import axios from "axios";

// Base API URL without query parameters
const baseUrl = "https://api.aladhan.com/v1/calendarByCity";

// Function to fetch prayer times based on city, month, and year
async function fetchPrayerTimes(city, month, year) {
  try {
    // Construct the full API URL with the provided city, country, month, and year
    const apiUrl = `${baseUrl}/${year}/${month}?city=${city}&country=yemen&x7xapikey=8420043b7b8b9a24e4dcf39c3bd612b7`;

    // Make the GET request to the API using axios
    const response = await axios.get(apiUrl);

    // Return the response data (parsed JSON)
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null in case of error
  }
}

// Export the function for use in other files
export default fetchPrayerTimes;
