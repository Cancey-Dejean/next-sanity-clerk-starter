import { Hand } from "lucide-react";
import { defineField, defineType } from "sanity";

export const buttonType = defineType({
  name: "button",
  title: "Button",
  type: "object",
  icon: Hand,
  fields: [
    defineField({
      name: "label",
      title: "Label",
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
    defineField({
      name: "variant",
      type: "string",
      title: "Variant",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Destructive", value: "destructive" },
          { title: "Outline", value: "outline" },
          { title: "Secondary", value: "secondary" },
          { title: "Ghost", value: "ghost" },
          { title: "Link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "size",
      type: "string",
      title: "Size",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Small", value: "sm" },
          { title: "Large", value: "lg" },
          { title: "Icon", value: "icon" },
        ],
      },
    }),
  ],
  options: {
    collapsible: true,
  },
  initialValue: {
    label: "Button",
    url: "#",
    newTab: false,
    variant: "default",
    size: "default",
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: Hand,
      };
    },
  },
});
