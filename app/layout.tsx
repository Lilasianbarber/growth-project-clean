import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Growth Project Tracker',
  description: 'Track your ideas. Build your vision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
