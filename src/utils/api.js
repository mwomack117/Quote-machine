export const API =
  "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10";

export const headers = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY
  }
};
