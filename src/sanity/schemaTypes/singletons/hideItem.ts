import { defineType } from "sanity";

export const hideItemType = defineType({
  name: "hideItem",
  title: "Hide",
  type: "boolean",
  description: "If true, this item will be hidden",
  initialValue: false,
});
