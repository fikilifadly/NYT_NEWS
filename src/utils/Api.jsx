import axios from "axios";

const key = import.meta.env.VITE_KEY;
const topArticle = import.meta.env.VITE_URL_TOPSTORIES;
const popularArticle = import.meta.env.VITE_URL_POPULAR;
const searchArticle = import.meta.env.VITE_URL_SEARCH;

export const apiHomePage = async () => {
  try {
    const { data } = await axios(`${topArticle}?api-key=${key}`);
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const apiPopularPage = async () => {
  try {
    const { data } = await axios(`${popularArticle}?api-key=${key}`);
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export const apiSearchArticle = async (q, page) => {
  try {
    const { data } = await axios(
      `${searchArticle}?q=${q}&page=${page}&api-key=${key}`
    );
    return data.response.docs;
  } catch (error) {
    console.error(error.message);
  }
};
