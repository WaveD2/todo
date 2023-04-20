import axios from "axios";

export const FakeApi = async (page) => {
  try {
    const response = await axios({
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "get",
      params: { _start: 0, _end: page },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
