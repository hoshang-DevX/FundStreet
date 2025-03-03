import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMutualFunds } from "../features/MutualFunds/mutualFundsThunk";
import { useNavigate } from "react-router-dom";

function MutualFunds() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.mutualFunds);

  useEffect(() => {
    dispatch(fetchMutualFunds()); // Fetch all mutual funds initially
  }, [dispatch]);

  // Categories
  const categories = ["Large Cap", "Mid Cap", "Small Cap"];

  // Navigate to category page
  const handleCategoryClick = (category) => {
    navigate(`/mutual-funds/${category.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700">
        Mutual Funds
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-700"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      {/* Loading Message */}
      {loading && (
        <p className="text-center animate-pulse text-green-700">Loading...</p>
      )}

      <p className="text-center text-gray-500">
        Click on a category to see specific mutual funds.
      </p>
    </div>
  );
}

export default MutualFunds;