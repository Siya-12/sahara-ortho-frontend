import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Certificates from "./pages/Certificates";
import ContactUs from "./pages/ContactUs";
import ProductCategory from "./pages/ProductCategory";
import ScrollToTop from "./components/ScrollToTop";
// import Login from "./pages/Login";

// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import ProtectedRoute from "./routes/ProtectedRoute";

// import AccountLayout from "./pages/account/AccountLayout";
// import Profile from "./pages/account/Profile";
// import Orders from "./pages/account/Orders";
// import Addresses from "./pages/account/Addresses";

// import AdminRoute from "./routes/AdminRoute";
// import AdminDashboard from "./pages/admin/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
     <div className="sticky top-0 z-50">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
          {/* <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        /> */}

         <Route
        element={
          // <ProtectedRoute>
            <MainLayout />
          // </ProtectedRoute>
        }
      >
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<ProductCategory />} />
      </Route>

        <Route
          path="/certifications"
          element={
            <MainLayout>
              <Certificates />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />

  
        {/* <Route
         path="/login"
          element={ <MainLayout>
              <Login />
            </MainLayout>} 
            /> */}

             {/* 🔐 USER DASHBOARD
  <Route element={<MainLayout />}>
      <Route
        path="/account"
        element={
        
          <ProtectedRoute>
            <AccountLayout />
          </ProtectedRoute>
          
        }
      >
        <Route index element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="addresses" element={<Addresses />} />
      </Route>
</Route>


<Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>


        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        /> */}

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

