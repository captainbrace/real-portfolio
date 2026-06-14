import './global.css';

export const metadata = {
  title: 'My Developer Portfolio',
  description: 'Junior Web Developer One-Page Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-red-950 text-red-50 font-sans antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}