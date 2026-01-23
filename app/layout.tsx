import './globals.css';

export const metadata = {
  title: 'Baam Platform | Always-On Market Presence System',
  description:
    'Baam runs your market presence across Google, social, video, and your website—continuously—so customers can find you, trust you, and choose you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
