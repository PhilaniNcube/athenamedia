import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Athena Media",

  applicationName: "Athena Media",
  description:
    "Create a unique online presence with our custom website design services. We specialize in crafting visually stunning and user-friendly websites that are tailored to your brand's needs and goals. Let us bring your vision to life and elevate your online identity with our expert team of designers and developers.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Website design",
    "Custom websites",
    "Web development",
    "User experience",
    "Responsive design",
    "Content management systems",
    "E-commerce solutions",
    "SEO optimization",
    "Web hosting",
    "Mobile optimization",
    "Graphic design",
    "Branding",
    "Web analytics",
    "Social media integration",
    "Website maintenance",
    "Web security",
  ],
  authors: [
    { name: "Philani Ncube" },
    { name: "Philani Ncube", url: "https://philanincube.co.za" },
  ],

  creator: "Philani Ncube",
  publisher: "Athena Media",
  openGraph: {
    title: "Athena Media",
    description:
      "Create a unique online presence with our custom website design services. We specialize in crafting visually stunning and user-friendly websites that are tailored to your brand's needs and goals. Let us bring your vision to life and elevate your online identity with our expert team of designers and developers.",
    url: "https://athenamedia.co.za",
    siteName: "Athena Media",
    images: [
      {
        url: "https://www.athenamedia.co.za/_next/image?url=%2Fassets%2Fhome%2Fdesktop%2Fhero-phone.png&w=640&q=75",
        width: 640,
        height: 200,
      },
    ],
    locale: "en-ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Media",
    description:
      "Create a unique online presence with our custom website design services. We specialize in crafting visually stunning and user-friendly websites that are tailored to your brand's needs and goals. Let us bring your vision to life and elevate your online identity with our expert team of designers and developers.",

    images: [
      "https://www.athenamedia.co.za/_next/image?url=%2Fassets%2Fhome%2Fdesktop%2Fhero-phone.png&w=640&q=75",
    ],
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
