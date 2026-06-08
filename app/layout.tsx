import "./globals.css";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export const metadata = {
  title: "حسین ستوده",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
