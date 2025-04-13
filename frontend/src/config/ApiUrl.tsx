

//api
export const ApiUrl = {
  baseUrl: import.meta.env.MODE === 'development'
    ? 'http://localhost:3000/manga'  // your local server
    : 'https://mangaverse-jg2h.onrender.com/manga' // deployed API
};




//user
export const userUrl = {
  baseUrl: import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'  // your local server
    : 'https://mangaverse-jg2h.onrender.com' // deployed API
}