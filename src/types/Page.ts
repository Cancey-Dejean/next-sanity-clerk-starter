import { PortableTextBlock } from "next-sanity"

export type PageProps = {
  metaTitle: string
  metaDescription: PortableTextBlock[]
  ogImage?: string
  ogImageAlt?: string
  body: PortableTextBlock[]
}
