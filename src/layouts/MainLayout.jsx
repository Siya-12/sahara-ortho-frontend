import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="top-0 left-0 w-full z-50 bg-white">
        <Topbar />
        <Navbar />
      </div>
        <main className="mt-0">
          {children}
          <Outlet />
        </main>

      <Footer />
      
       {/* WhatsApp Popup – Global */}
      <WhatsAppFloat />
    </>
  );
};

export default MainLayout;
