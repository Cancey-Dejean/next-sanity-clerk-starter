import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./documents/category";
import { postType } from "./documents/post";
import { authorType } from "./documents/author";
import { userType } from "./documents/user";
import { linkType } from "./objects/link";
import { headerType } from "./singletons/header";
import { customImage } from "./singletons/customImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    userType,
    linkType,
    headerType,
    customImage,
  ],
};
