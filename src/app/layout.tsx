import type { Metadata } from "next";
import "../styles/globals.css";
import ThemeProvider from "../utils/theme/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Fonts
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Phoenix Company",
  description:
    "شركة فينكس لجميع المجالات الهندسة الزراعية ومن المجالت التي تهتم بها: لاندسكيب و الصرف والري و الميكانيكا او الميكنة و الزراعية الحديثة والصوب الزراعية وتهدف الشركة ايضا الي المساعدة في النهوض بالمجال الزراعي حيث انها تعلن عن كورسات في جميع المجالات",
  keywords:
    "هندسة, هندسة زرعية, زراعة, ميكانيكا, ميكنة, لاندسكيب, زراعة حديثة, صوب زراعية, ري, صرف, ري وصرف, كورسات, كورسات زراعية, كورسات مجانية, كورسات زراعية مجانية, كورسات مجانا, مجانا,",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black text-black dark:text-white bg-no-repeat duration-300 `}
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
          >
            <Header />

            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
