import axios from "axios";

//creating the axios instance
const instance = axios.create({
  baseURL: "https://tiktok-mern-b4ckend.herokuapp.com/",
});

export default instance;
