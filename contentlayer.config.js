import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: "articles/*.mdx",
  // At the time of writing, we also have to define the `fields`
  // option to prevent an error on generation. We'll discuss
  // this option later. For now, we'll add an empty object.
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "string", //Change to date
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    tag: {
      type: "string",
      required: true,
    },
  },

  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Article],
});
