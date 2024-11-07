import "../globals.css";

import { sanityFetch } from "@/sanity/lib/live";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/fragments";

// export async function generateMetadata(): Promise<Metadata> {
//   const { data: settings } = await sanityFetch({
//     query: settingsQuery,
//     // Metadata should never contain stega
//     stega: false,
//   });
//   const title = settings?.title || demo.title;
//   const description = settings?.description || demo.description;

//   const ogImage = resolveOpenGraphImage(settings?.ogImage);
//   let metadataBase: URL | undefined = undefined;
//   try {
//     metadataBase = settings?.ogImage?.metadataBase
//       ? new URL(settings.ogImage.metadataBase)
//       : undefined;
//   } catch {
//     // ignore
//   }
//   return {
//     metadataBase,
//     title: {
//       template: `%s | ${title}`,
//       default: title,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: globals } = await sanityFetch({
    query: ALL_SETTINGS_QUERY,
  });

  const { header, footer } = globals;

  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Header header={header} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
}
