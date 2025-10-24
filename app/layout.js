import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PramodLabs",
  description:
    "Your premier destination for technology, business, fashion, sports, education, and share market insights.",
  keywords:
    "technology, business, fashion, sports, education, share market, news, articles, insights",
  authors: [{ name: "PramodLabs Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "PramodLabs",
    description:
      "Your premier destination for technology, business, fashion, sports, education, and share market insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PramodLabs",
    description:
      "Your premier destination for technology, business, fashion, sports, education, and share market insights.",
  },
  icons: {
    icon: "/PramodLabs-icon.png",
    shortcut: "/PramodLabs-icon.png",
    apple: "/PramodLabs-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
