import axios from "axios";

const KEY = "AIzaSyDFKoEXadQSmGSXGP3Vxlc7N3NUHd6InhI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
