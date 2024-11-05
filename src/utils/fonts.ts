// import { Inter } from "next/font/google";
import localFont from "next/font/local";

// export const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["300", "400", "500", "600", "700"],
// });

export const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const inter = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-inter",
  weight: "400 500 600 700",
});
