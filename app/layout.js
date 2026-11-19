import './globals.css';
import './modal.css';
import Navigation from '@/components/Navigation';

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#f8faf5' };

export const metadata = {
  title: 'Ajith Kumar Choudoju | Electronics Engineer',
  description: 'Electronics & Communication Engineering student with hands-on expertise in robotics, automation, embedded systems, and intelligent software solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
