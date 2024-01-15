import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ReturnLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      </>
  );
}
