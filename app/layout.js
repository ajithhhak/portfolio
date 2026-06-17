import './globals.css';
import './modal.css';
import Navigation from '@/components/Navigation';
import PCBBackground from '@/components/PCBBackground';

export const metadata = {
  title: 'Ajith Kumar Choudoju | Robotics, VLSI, IoT & AI',
  description: 'Electronics & Software Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PCBBackground />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
