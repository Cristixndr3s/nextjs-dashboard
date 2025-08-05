import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Lusitana } from 'next/font/google';
import { Metadata } from 'next';


const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // normal y bold
});

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}