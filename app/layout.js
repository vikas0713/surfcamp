import "../sass/main.scss";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SURFCAMP",
  description: "Testing application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
