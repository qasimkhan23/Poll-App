import axios from "axios";

export const submitPollData = async (data: { question: string; answer: string | null }[]) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting poll data:", error);
    throw error;
  }
};
