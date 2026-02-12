import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBuy = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };
  const handleClick = () => {
  navigate("/products");
};

  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>

      <button
        onClick={handleBuy}
        className="mt-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
      >
        Buy Now
      </button>
    </div>
  );
}
