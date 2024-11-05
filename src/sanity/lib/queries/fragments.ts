import { groq } from "next-sanity";

export const BUTTON_FIELDS = /* groq */ `
   label,
   newTab,
   url,
   variant,
   size
`;
export const linkFields = /* groq */ `
  label,
  description,
  newTab,
  url,
`;

export const headerFields = groq`
"header": *[_type == "header"][0] {
    showAuth,
    primaryMenu[] {
      _type,

      _type == "navLink" => {
        ${linkFields}
      },

      _type == "subMenu" => {
        label,
        highlightList {
          featuredTitle,
          featuredDesc
        },
        linkList[] {
          description,
          ${linkFields}
        },
      },
    },
    // "logoImage": logo.asset->url,
    // "logoImageAlt": logo.alt,
  }
`;

export const footerFields = groq`
"footer": *[_type == "footer"][0] {
    title
  }
`;

export const ALL_SETTINGS_QUERY = groq`{
  ${headerFields},
  ${footerFields}
}`;

export const BUTTON_GROUP_FIELDS = /* groq */ `
  ctaButtons [] {
    ${BUTTON_FIELDS}
  }
`;

export const HERO_FIELDS = /* groq */ `
  topText,
  headline,
  subHeading,
  copyPasteText,
  hide,
  ${BUTTON_GROUP_FIELDS}
`;

export const pageFields = /* groq */ `
  _id,
  metaTitle,
  metaDescription,
  "ogImg": ogImage.asset->url,
  "slug": slug.current,
  pageBuilder [] {
    _type,
    _key,
    _type == "hero" => {
      ${HERO_FIELDS}
    },
  }
`;

export const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;
