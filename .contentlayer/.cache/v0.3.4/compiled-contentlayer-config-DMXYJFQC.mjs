// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    date: { type: "date", required: true },
    featured_image: { type: "string", required: true },
    topics: { type: "list", of: { type: "string" }, required: true },
    author: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "posts", documentTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DMXYJFQC.mjs.map
