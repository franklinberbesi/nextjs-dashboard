import { montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
      {/* {antialiased}: mejora un poco el como se renderiza la fuente en algunos navegadores y monitores */}
    </html>
  );
}
