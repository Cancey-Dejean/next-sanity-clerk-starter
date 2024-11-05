import { User } from "lucide-react";
import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "customImage",
    }),
    defineField({
      name: "primaryMenu",
      type: "array",
      title: "Primary Menu",
      of: [
        { type: "navLink" },
        { type: "subMenu" },
        { type: "subMenuLinkGrid" },
        { type: "subMenuHighlight" },
      ],
    }),
    defineField({
      name: "cta",
      type: "array",
      title: "Call to Action",
      of: [{ type: "button" }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: "showAuth",
      title: "Show Auth Buttons",
      type: "boolean",
      initialValue: false,
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
