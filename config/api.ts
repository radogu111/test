const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const BASE_URL = 'https://api.themoviedb.org/3/'
export const EP_TRENDING = `trending/all/day?api_key=${API_KEY}`
export const getImageUrl = (endpoint: String) => {
    return `http://image.tmdb.org/t/p/original${endpoint}`
}
