import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMutualFunds } from "../../features/MutualFunds/mutualFundsThunk";
import { useParams } from "react-router-dom";

function CategoryFunds() {
  const { category } = useParams(); // Get the category from URL
  const dispatch = useDispatch();
  const { funds, loading, error } = useSelector((state) => state.mutualFunds);

  useEffect(() => {
    dispatch(fetchMutualFunds(category)).unwrap(); // Fetch funds for this category
  }, [dispatch, category]);

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700">
        {category.replace("-", " ").toUpperCase()} Funds
      </h1>

      {/* Error Message */}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      {/* Loading Message */}
      {loading && (
        <p className="text-center animate-pulse text-green-700">Loading...</p>
      )}

      {/* Funds List */}
      <div className="grid md:grid-cols-3 gap-6">
        {funds.length > 0 ? (
          funds.map((fund) => (
            <div key={fund.id} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold text-green-700">{fund.name}</h3>
              <p className="text-gray-700 mt-1">{fund.category} Fund</p>
              <p className="text-gray-500 text-sm">Returns: {fund.returns}%</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No funds available.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryFunds;