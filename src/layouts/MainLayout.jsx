import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="pt-[150px]">
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
