import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: "YukthiMantra Events & Masterclasses | Coming Soon",
  description: "Live industry workshops, global tech summits, healthcare AI conferences, and hands-on hackathons by YukthiMantra Academy.",
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
