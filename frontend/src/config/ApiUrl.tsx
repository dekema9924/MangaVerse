
console.log(import.meta.env.MODE)
console.log(import.meta.env.VITE_API_URL)
const BASE = import.meta.env.VITE_API_URL;

//api

export const ApiUrl = {
  baseUrl: `${BASE}/manga`
};




//user
export const userUrl = {
  baseUrl: BASE
};