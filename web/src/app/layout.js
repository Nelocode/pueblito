import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Pueblito Caribeño",
  description: "Una comunidad que tiene mucho arte y cultura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
