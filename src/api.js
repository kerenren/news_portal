import { NEWS_API_KEY } from "./config";
import axios from "axios";
const baseURL = "https://newsapi.org/v2/everything";


export const getArticles = async (topic) => {
    try {
      const response = await axios.get(`${baseURL}?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`)
      const result = await response.data;
      return result
    } catch (error) {
      console.log(error);
      return error
    }
  };