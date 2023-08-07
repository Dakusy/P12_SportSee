import axios from "axios";
import { useQuery } from "react-query";
import { mock } from "../services/GetUser";
import mockBackData from "../mocks/mockBackData"; // Import the fallback JSON

const getUserPerformance = async (userId) => {
  if(mock == false){
  const { data } = await axios.get(
    `http://localhost:3000/user/${userId}/performance`);
    const formattedData = formatPerformance(data);
  return {data: formattedData,};
  } else {
    return mockBackData; // Return the fallback JSON data
  }
};

const formatPerformance = (rawData) => {
  return rawData.data.data.map((skill) => ({
    value: skill.value,
    kind: rawData.data.kind[skill.kind],
  }));
};

export default function useUserPerformance(userId) {
  return useQuery(["userPerformance"], () => getUserPerformance(userId));
}
