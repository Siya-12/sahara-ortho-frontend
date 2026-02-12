// import { useState } from "react";
// import { doc, setDoc , getDoc} from "firebase/firestore";
// import { db } from "../firebase";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// import { auth } from "../firebase";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";


// export default function Login() {
//   const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");
//  const [isSignup, setIsSignup] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();


//   /* ---------------- GOOGLE LOGIN ---------------- */
//  const handleGoogleLogin = async () => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // 🔑 Firebase ID token
//     const token = await result.user.getIdToken();

//     // 👉 SEND TOKEN TO BACKEND
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ token }),
//     });

//     const data = await res.json();
//     const userDoc = await getDoc(doc(db, "users", user.uid));

// if (!userDoc.exists()) {
//   await setDoc(doc(db, "users", user.uid), {
//     email: user.email,
//     role: "user"
//   });
// }


//     // 👉 SAVE JWT
//    login(data.token);

// if (data.user.role === "admin") {
//   navigate("/admin");
// } else {
//   navigate("/account");
// }


//     alert("Login successful ✅");
//   } catch (error) {
//     console.error(error);
//     alert(error.message);
//   }
// };

//  /* ---------------- EMAIL/PASSWORD LOGIN ---------------- */
// const handleEmailAuth = async () => {
//   try {
//     let userCredential;

//     if (isSignup) {
//       userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//     } else {
//       userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//     }
// const user = result.user;

// await setDoc(doc(db, "users", user.uid), {
//   email: user.email,
//   role: "user", // 👈 default role
//   createdAt: new Date()
// });
//     const token = await userCredential.user.getIdToken();

//     // 👉 Send token to backend
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ token }),
//     });

//     const data = await res.json();

//     login(data.token);

// if (data.user.role === "admin") {
//   navigate("/admin");
// } else {
//   navigate("/account");
// }
//   } catch (error) {
//     alert(error.message);
//   }
// };

//   return (
//     <>
//       {/* <Topbar />
//       <Navbar /> */}

//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8">
          
//           <h2 className="text-2xl font-bold text-center text-gray-800">
//             Welcome to Sahara Ortho
//           </h2>

//           <p className="text-center text-gray-500 mt-2">
//             Sign in to order orthopaedic solutions
//           </p>

//           {/* GOOGLE LOGIN */}
//           <button
//             onClick={handleGoogleLogin}
//             className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
//           >
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               className="w-5 h-5"
//               alt="google"
//             />
//             <span className="font-medium">Continue with Google</span>
//           </button>

//           {/* DIVIDER */}
//           <div className="flex items-center my-6">
//             <div className="flex-grow border-t" />
//             <span className="px-3 text-gray-400 text-sm">OR</span>
//             <div className="flex-grow border-t" />
//           </div>

//           {/* EMAIL/PASSWORD LOGIN */}
//          <input
//   type="email"
//   placeholder="Enter email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   className="w-full border px-4 py-3 rounded-lg"
// />

// <input
//   type="password"
//   placeholder="Enter password"
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
//   className="w-full border px-4 py-3 rounded-lg mt-3"
// />

// <button
//   onClick={handleEmailAuth}
//   className="mt-4 w-full bg-blue-700 text-white py-3 rounded-lg"
// >
//   {isSignup ? "Create Account" : "Login"}
// </button>

// <p
//   className="text-sm text-center mt-4 text-blue-600 cursor-pointer"
//   onClick={() => setIsSignup(!isSignup)}
// >
//   {isSignup
//     ? "Already have an account? Login"
//     : "New user? Create an account"}
// </p>




//           <p className="text-xs text-gray-400 mt-6 text-center">
//             By continuing, you agree to Sahara Ortho’s Terms & Privacy Policy
//           </p>
//         </div>
//       </div>

//       {/* <Footer /> */}
//     </>
//   );
// }