
export const ApiUrl = {
    baseUrl: import.meta.env.MODE === 'development'
      ? 'http://localhost:3000/manga'  // your local server
      : 'https://mangaverse-jg2h.onrender.com/manga' // deployed API
  };