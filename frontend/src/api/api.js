import axios from "axios";

const API_URL = "http://localhost:5000/api/insights";

export const fetchInsights = (filters) =>
  axios.get(API_URL, { params: filters });
