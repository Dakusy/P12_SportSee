import axios from "axios";
import { useQuery } from "react-query";
import { mock } from "../services/GetUser";
import mockBackData from "../mocks/mockBackData"; // Import the fallback JSON
import { formatPerformance } from "../components/utils";

const getUserPerformance = async (userId) => {
  if(mock === false){
  const { data } = await axios.get(
    `http://localhost:3000/user/${userId}/performance`);
    const formattedData = formatPerformance(data);
  return {data: formattedData,};
  } else {
    return mockBackData; // Return the fallback JSON data
  }
};

export default function useUserPerformance(userId) {
  return useQuery(["userPerformance"], () => getUserPerformance(userId));
}
