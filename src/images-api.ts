import axios from "axios";
import { Image, SearchResult } from "./types";

const apiKey = "BQVJndHzZSkNiJz6FpW26zHsUOHK2_4OaZ4YwXUA27k";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${apiKey}`;
  return config;
});

export const fetchImages = async (
  searchQuery: string,
  page: number
): Promise<Image[]> => {
  const response = await axios.get<SearchResult>("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 8,
      page,
    },
  });

  return response.data.results;
};