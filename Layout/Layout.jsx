import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
