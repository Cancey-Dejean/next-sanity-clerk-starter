import AddContent from "@/components/ui/add-content";
import { sanityFetch } from "@/sanity/lib/live";
import { getHomepageQuery } from "@/sanity/lib/queries";
import { RenderSections } from "@/utils/renderSections";

export default async function Home() {
  const { data: home } = await sanityFetch({
    query: getHomepageQuery,
  });
  const pageBuilder = home.pageBuilder;

  if (pageBuilder === null) {
    return <AddContent />;
  }
  return <>{pageBuilder.map(RenderSections)}</>;
}
