import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Banner />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
