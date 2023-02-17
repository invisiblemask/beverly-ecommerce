import Banner from "./Banner";
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
    </div>
  );
}
