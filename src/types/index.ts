import { ButtonProps } from "@/components/ui/Button";
import { PortableTextBlock } from "next-sanity";

export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type NavLink = LinkItem & {
  description: string;
};

export type PrimaryMenu = {
  _type: "subMenu" | "highlightMenu" | "navLink";
  label: string;
  highlightList: {
    featuredTitle: string;
    featuredDesc: string;
  };
  linkList: LinkItem[];
};

export type HeaderProps = {
  primaryMenu?: PrimaryMenu[];
  showAuth?: boolean;
  cta?: Buttons[];
};
export type FooterProps = {
  title: string;
};

export type Buttons = LinkItem & {
  size: ButtonProps["size"];
  variant: ButtonProps["variant"];
};

export type PageProps = {
  metaTitle: string;
  metaDescription: PortableTextBlock[];
  ogImage?: string;
  ogImageAlt?: string;
  body: PortableTextBlock[];
};

export type PostProps = {
  _id?: string;
  title: string;
  slug: string;
  // excerpt?: string;
  // _createdAt?: string;
  // currentSlug: string;
  // featuredImage?: string;
  // featuredImageAlt: string;
  // body: PortableTextBlock[];
};

export type HeroOne = {
  topText?: string;
  headline?: string;
  subHeading?: string;
  copyPasteText?: string;
  ctaButtons?: Buttons[];
  hide?: boolean;
};
