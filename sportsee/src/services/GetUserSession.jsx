import axios from "axios";
import { useQuery } from "react-query";
import { mock } from "../services/GetUser";
import mockBackData from "../mocks/mockBackData"; // Import the fallback JSON

import { formatSessions } from "../components/utils";

const getUserSession = async (userId) => {
  if(mock === false){
    const { data } = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`);
    return formatSessions(data.data.sessions);
  }
  else {
    return mockBackData; // Return the fallback JSON data
  }
};

export default function useUserSession(userId) {
  return useQuery(["userSession"], () => getUserSession(userId));
}
