import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import { Post } from "../../../../../sanity.types";

export default function PostCard({ title, slug }: Post) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>{excerpt}</CardDescription> */}
      </CardHeader>
      <CardContent>
        {/* {featuredImage && (
          <div className="relative aspect-video">
            <Image
              src={urlForImage(featuredImage as any)}
              alt={featuredImageAlt}
              fill
              className="object-cover"
            />
          </div>
        )} */}

        <Link href={`/posts/${slug}`}> Read More</Link>
      </CardContent>
    </Card>
  );
}
