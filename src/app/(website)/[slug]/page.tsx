import AddContent from "@/components/ui/add-content";
import { sanityFetch } from "@/sanity/lib/live";
import { getPageQuery, pagesSlugs } from "@/sanity/lib/queries";
import { RenderSections } from "@/utils/renderSections";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    stega: false,
  });

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const [{ data: page }] = await Promise.all([
    sanityFetch({
      query: getPageQuery,
      params: { slug: params.slug || "home" },
    }),
  ]);

  if (!page?._id) {
    return notFound();
  }
  const pageBuilder = page.pageBuilder;

  if (pageBuilder === null) {
    return <AddContent />;
  }
  return <>{pageBuilder.map(RenderSections)}</>;
}
