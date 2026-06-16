import './globals.css';

export const metadata = {
  title: 'DevOps LaunchPad',
  description: 'A simple Next.js website built for DevOps practice'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
