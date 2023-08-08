import axios from "axios";
import { useQuery } from "react-query";
import mockBackData from "../mocks/mockBackData"; // Import the fallback JSON

let mock = false;

const getUser = async (userId) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}`);
    mock = false;
    return data;
  } catch (error) {
    console.error("API request failed GetUser :", error);
    mock = true;
    return mockBackData; // Return the fallback JSON data
  }
};

const useUser = (userId) => {
  return useQuery(["user", userId], () => getUser(userId), {
    onError: (error) => {
      console.error("Error fetching user data:", error);
      // You can also throw the error here if you want to propagate it further
    },
  });
};

export { useUser, mock };

