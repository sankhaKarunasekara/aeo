import axios from "axios";
// import https from "https";

const aeoAPI = axios.create({
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false
  // }),
  baseURL: "http://localhost:9090/",
  timeout: 10000,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
    // Accept: "application/json"
  }
  // cache: "no-cache"
  // mode: "no-cors",
  // credential: "same-origin",
});

export default aeoAPI;
