import "../globals.css";

import type { Metadata } from "next";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/live";
import { globalsQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

import Header from "@/components/ui/Header";

import { SanityDocument, toPlainText } from "next-sanity";
import Footer from "@/components/ui/Footer";
import { client } from "@/sanity/lib/client";
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/fragments";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const globals = await client.fetch(globalsQuery, {
  //   query: globalsQuery,
  //   // perspective: "published",
  //   stega: false,
  // });

  // const globals = await sanityFetch({
  //   query: globalsQuery,
  //   stega: false,
  // });

  // const [{ data: globals }] = await Promise.all([
  //   sanityFetch({
  //     query: globalsQuery,
  //     stega: false,
  //   }),
  // ]);

  // const globals = await client.fetch(globalsQuery);
  // const { header, footer } = globals;

  const { data: globals } = await sanityFetch({
    query: ALL_SETTINGS_QUERY,
  });

  const { header, footer } = globals;
  console.log(footer);
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Header header={header} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
}
