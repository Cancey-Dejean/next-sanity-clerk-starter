import "./globals.css";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { Toaster } from "sonner";

import { SanityLive } from "@/sanity/lib/live";

import { LiveErrorBoundary } from "@/components/LiveErrorBoundary";
import DraftModeToast from "@/components/DraftModeToast";
import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@/utils/fonts";

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
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} bg-white text-black`}>
        <body>
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )}
          <LiveErrorBoundary>
            <SanityLive />
          </LiveErrorBoundary>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
