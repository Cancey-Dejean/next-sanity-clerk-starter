import { User } from "lucide-react";
import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Label needs to be set",
      };
    },
  },
});
