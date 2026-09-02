import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: "YukthiMantra Academy Platform | Coming Soon",
  description: "Next-generation mentorship and learning platform connecting ambitious learners with industry architects and structured engineering pathways.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
