import { UserIcon } from "lucide-react";
import { defineType, defineField } from "sanity";

export const userSchema = defineType({
  name: "user",
  title: "Users",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
});
