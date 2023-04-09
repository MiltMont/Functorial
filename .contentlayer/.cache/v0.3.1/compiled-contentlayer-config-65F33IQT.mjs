// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
var Article = defineDocumentType(() => ({
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
      required: true
    },
    date: {
      type: "string",
      //Change to date
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    tag: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: { rehypePlugins: [rehypeSlug, rehypeKatex] }
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-65F33IQT.mjs.map
