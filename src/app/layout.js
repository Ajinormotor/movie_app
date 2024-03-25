
import "./globals.css";



export const metadata = {
  title: "Netflix Lite Movie App",
  description: "Netflix lite movie app brings the latesttrending movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
