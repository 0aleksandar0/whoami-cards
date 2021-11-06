import axios from "axios";

const instance = axios.create({
  baseURL: "https://whoami-cards-backend.herokuapp.com",
});

export default instance;
