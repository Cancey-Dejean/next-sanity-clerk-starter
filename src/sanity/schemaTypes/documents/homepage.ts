import { GROUPS } from "@/constants";
import { Home } from "lucide-react";

import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: Home,
  groups: GROUPS,
  fields: [
    defineField({
      type: "string",
      name: "metaTitle",
      title: "Title",
      validation: (rule) => rule.required(),
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      description:
        "Used both for the <meta> description tag for SEO, and the personal website subheader.",
      type: "text",
      group: "seo",
      validation: (rule) => rule.max(155),
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      group: "seo",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: "pageBuilder",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageBlocks",
      group: "pageBuilder",
    }),
  ],
  preview: {
    select: {
      title: "metaTitle",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Page",
      };
    },
  },
});
