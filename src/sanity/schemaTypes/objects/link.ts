import { Link } from "lucide-react";
import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: "link",
  title: "Link",
  type: "object",
  icon: Link,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "newTab",
      type: "boolean",
      title: "Open in new tab?",
      initialValue: false,
    }),
  ],
  initialValue: {
    label: "Link",
    newTab: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: Link,
      };
    },
  },
});
