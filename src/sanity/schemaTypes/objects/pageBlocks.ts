import { defineType } from "sanity";

export const pageBlocks = defineType({
  name: "pageBlocks",
  type: "array",
  of: [{ type: "hero" }],
  options: {
    insertMenu: {
      groups: [
        {
          name: "heroes",
          title: "Heroes",
          of: ["hero"],
        },
      ],
      views: [
        {
          name: "grid",
          previewImageUrl: (schemaTypeName) =>
            `/static/preview-${schemaTypeName}.jpg`,
        },
        { name: "list" },
      ],
    },
  },
});
