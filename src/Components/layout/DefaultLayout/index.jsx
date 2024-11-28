import Footer from "../Footer/Footer";
import HeaderAfterLogin from "../Header/HeaderAfterLogin";
import Navbar from "../Navbar/Navbar";
export default function DefaultLayout({ children }) {
  return (
    <div>
      <HeaderAfterLogin />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
