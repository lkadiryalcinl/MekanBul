import axios from "axios";
export default axios.create({
  baseURL: "https://mekan-bul-api-kadir-yalcin.vercel.app/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
});
