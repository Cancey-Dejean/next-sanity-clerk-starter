import { Link } from "lucide-react";
import { defineField, defineType } from "sanity";

export const subMenuHighlight = defineType({
  name: "subMenuHighlight",
  title: "Dropdown (Highlight)",
  type: "object",
  icon: Link,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightList",
      title: "Highlight List",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "featuredTitle",
          title: "Featured Title",
          type: "string",
        }),
        defineField({
          name: "featuredDesc",
          title: "Featured Description",
          type: "text",
        }),
        // defineField({
        //   name: "featuredImage",
        //   title: "Featured Image",
        //   type: "customImage",
        // }),
        // defineField({
        //   name: "featuredDesc",
        //   title: "Featured Description",
        //   type: "te",
        // }),
        // defineField({
        //   name: "items",
        //   title: "Items",
        //   type: "array",
        //   of: [
        //     {
        //       name: "link",
        //       title: "Menu Item",
        //       type: "link",
        //     },
        //   ],
        //   validation: (rule) => rule.min(1).max(3),
        // }),
      ],
    }),
    defineField({
      name: "linkList",
      title: "Link List",
      type: "array",
      of: [
        {
          type: "link",
        },
      ],
      validation: (rule) => rule.required().min(1).max(3),
    }),
  ],
  preview: {
    select: {
      title: "label",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Label needs to be set",
        subtitle: "Dropdown Menu",
        media: Link,
      };
    },
  },
});
