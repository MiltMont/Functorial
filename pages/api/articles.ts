import axios from "axios";

const url = `${process.env.PAYLOAD_URL}/api/articles/`;

export default async function getArticles() {
  const r = await axios.get(url);
  const articles = r.data;

  return { articles: articles.docs, totalDocs: articles.totalDocs };
}
