// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//       setIsAuthenticated(true);
//     }
//     setLoading(false);
//   }, []);

//   const login = (jwtToken) => {
//     localStorage.setItem("token", jwtToken);
//     setToken(jwtToken);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setIsAuthenticated(false);
//   };

//   const fetchUser = async () => {
//   try {
//     const res = await api.get("/api/user/me");
//     setUser(res.data.user);
//   } catch {
//     logout();
//   }
// };

//   return (
//     <AuthContext.Provider
//       value={{ token, isAuthenticated, login, logout, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
