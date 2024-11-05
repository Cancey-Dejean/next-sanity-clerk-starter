import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "topText",
      title: "Top Text",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "subHeading",
      title: "Subheading",
      type: "text",
    }),
    defineField({
      name: "ctaButtons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "button",
        },
      ],
      validation: (rule) => rule.min(1).max(2),
    }),
    defineField({
      name: "copyPasteText",
      type: "string",
      title: "Copy Paste Text",
    }),
    defineField({
      name: "hideItem",
      title: "Hide",
      type: "boolean",
      description: "If true, this item will be hidden",
      initialValue: false,
    }),
  ],
  initialValue: {
    subHeading: "Headline",
    copyPasteText: "Copy",
  },
  preview: {
    select: {
      title: "headline",
      subtitle: "subHeading",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Hero",
        subtitle: subtitle || "Subheading needs to be set",
      };
    },
  },
});
