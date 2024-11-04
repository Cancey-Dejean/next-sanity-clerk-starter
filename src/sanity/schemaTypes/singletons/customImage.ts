import { Image } from "lucide-react";
import { defineField, defineType } from "sanity";

export const customImage = defineType({
  name: "customImage",
  type: "image",
  title: "Image",
  icon: Image,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alt text",
      validation: (rule) => rule.error("Alt text is required").required(),
    }),
  ],
});
