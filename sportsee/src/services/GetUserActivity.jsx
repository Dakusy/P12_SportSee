import axios from "axios";
import { useQuery } from "react-query";
import { mock } from "../services/GetUser";
import mockBackData from "../mocks/mockBackData"; // Import the fallback JSON

/**
 * In App.js we use react query, here we define a function to fetch data
 * the component that consumes this data add useQuery hook
 * the key "userId" allows react query to manage data.
 * the key"userId" will be same for other charts
 */
const getUserActivity = async (userId) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    return mockBackData; // Return the fallback JSON data
  }
};

export default function useUserActivity(userId) {
  return useQuery(["userActivity"], () => getUserActivity(userId));
}
//When multiple components request the same query, only one request is issued

