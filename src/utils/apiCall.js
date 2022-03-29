import axios from "axios";

const BASE_URL = "https://jojos-adventure-be.herokuapp.com/";

const storyApi = axios.create({
  baseURL: BASE_URL,
});

const storyCalls = {
  startStory: () => storyApi.get("/story"),
  nextStory: (id) => storyApi.get(`/story/${id}`),
};

export default storyCalls;
