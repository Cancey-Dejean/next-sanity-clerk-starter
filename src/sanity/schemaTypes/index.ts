import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./documents/category";
import { postType } from "./documents/post";
import { authorType } from "./documents/author";
import { userType } from "./documents/user";
import { linkType } from "./objects/link";
import { headerType } from "./singletons/header";
import { customImage } from "./singletons/customImage";
import { subMenuHighlight } from "./objects/subMenuHighlight";
import { subMenuType } from "./objects/subMenu";
import { buttonType } from "./objects/button";
import { hideItemType } from "./singletons/hideItem";
import { pageBlocks } from "./objects/pageBlocks";
import { heroType } from "./objects/sections/hero";
import { blockContentType } from "./arrays/blockContentType";
import { pageType } from "./documents/page";
import { navLinkType } from "./objects/navLink";
import { subMenuLinkGridType } from "./objects/subMenuLinkGrid";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    pageType,
    postType,
    authorType,
    userType,
    navLinkType,
    linkType,
    headerType,
    customImage,
    buttonType,
    subMenuType,
    subMenuLinkGridType,
    subMenuHighlight,
    hideItemType,
    pageBlocks,

    // Sections
    heroType,
  ],
};
