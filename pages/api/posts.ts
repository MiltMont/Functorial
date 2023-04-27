import axios from "axios";

const url = `http://${process.env.PAYLOAD_IP}:3000/api/posts`;

export default async function handler(req, res) {
  const r = await axios.get(url);
  const posts = r.data;

  res.status(200).json({ docs: posts.docs, totalDocs: posts.totalDocs });
}
