import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

const root = process.cwd();

export type FrontMatter = {
  title: string;
  date: string;
  summary: string;
  tag: string;
  slug: string;
};

// Returns an array of files in the
export const getFiles = async () => {
  return fs.readdirSync(path.join(root, "articles"));
};

// Returns all articles frontmatter
export const getAllArticlesFrontMatter = async () => {
  const files = await getFiles();

  const posts = files
    .map((postSlug: string) => {
      const source = fs.readFileSync(
        path.join(root, "articles", postSlug),
        "utf8"
      );
      const parsedFile = matter(source);

      return parsedFile.data as FrontMatter;
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // This wont work until I implement dates

  return posts as FrontMatter[];
};

export const getArticleBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(root, "articles", `${slug}.mdx`),
    "utf8"
  );

  const parsedFile = matter(source);

  const data = parsedFile.data;
  const content = parsedFile.content;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkToc],
    },
  });

  return { mdxSource, frontMatter: data as FrontMatter };
};
