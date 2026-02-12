import { NavLink, Outlet } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

export default function AccountLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto flex gap-6 py-8">

        {/* LEFT SIDEBAR */}
        <div className="w-1/4 bg-white rounded shadow p-4">
          <h2 className="font-semibold text-lg mb-4">
            Hello 👋
          </h2>

          <nav className="space-y-2">
            <NavLink
              to="/account"
              end
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                }`
              }
            >
              Profile Information
            </NavLink>

            <NavLink
              to="/account/orders"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                }`
              }
            >
              My Orders
            </NavLink>

            <NavLink
              to="/account/addresses"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                }`
              }
            >
              Manage Addresses
            </NavLink>

            <button
              onClick={logout}
              className="w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </nav>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-white rounded shadow p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
