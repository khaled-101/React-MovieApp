import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=7f74ffb2996003663e3879edf6de0988'
})

