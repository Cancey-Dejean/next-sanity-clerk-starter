import { PortableTextTextBlock } from "sanity"

export type CategoryProps = {
  _id: string
  title: string
  categorySlug: string
  image?: string
  description?: any
  postCount?: number
}
