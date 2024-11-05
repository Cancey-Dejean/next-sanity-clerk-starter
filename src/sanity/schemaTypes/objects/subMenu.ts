import { Link } from "lucide-react";
import { defineField, defineType } from "sanity";

export const subMenuType = defineType({
  name: "subMenu",
  title: "Links (Column)",
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
      name: "linkMenu",
      type: "array",
      title: "Menu",
      of: [{ type: "link" }],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  initialValue: {
    label: "Link",
  },
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
