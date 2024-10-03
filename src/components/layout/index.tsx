import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="full-width content-grid">
      <Navbar />
      <main className="full-width content-grid mt-24">{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
