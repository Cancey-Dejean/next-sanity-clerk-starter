import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./documents/category";
import { postType } from "./documents/post";
import { authorType } from "./documents/author";
import { userType } from "./documents/user";
import { linkType } from "./objects/link";
import { headerType } from "./singletons/header";
import { customImage } from "./singletons/customImage";
import { buttonType } from "./objects/button";
import { hideItemType } from "./singletons/hideItem";
import { pageBlocks } from "./objects/pageBlocks";
import { heroType } from "./objects/sections/hero";
import { blockContentType } from "./arrays/blockContentType";
import { pageType } from "./documents/page";
import { navLinkType } from "./objects/navLink";
import { subMenuType } from "./objects/subMenu";
import { footerType } from "./singletons/footer";
import { homepageType } from "./documents/homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    homepageType,
    pageType,
    postType,
    authorType,
    userType,
    navLinkType,
    linkType,
    headerType,
    footerType,
    customImage,
    buttonType,
    subMenuType,
    hideItemType,
    pageBlocks,

    // Sections
    heroType,
  ],
};
