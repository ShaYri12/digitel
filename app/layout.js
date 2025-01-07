import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export const metadata = {
  title: "Digitel",
  description: "AI Voice Agent for Phone Calls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SplashScreen />
        {children}
        <Footer />
      </body>
    </html>
  );
}
