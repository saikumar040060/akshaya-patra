import './globals.css';
import Header from '@/components/layout/Header'; // ✅ Add this line

export const metadata = {
  title: 'Akshaya Patra',
  description: 'Authentic Indian Restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-amber-50">
        <Header /> {/* ✅ Header now appears on all pages */}
        <main>{children}</main>
      </body>
    </html>
  );
}
