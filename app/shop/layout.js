import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ShopLayout({children}) {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}