import { useEffect } from "react";

import { useDispatch, useSelector} from "react-redux";

import { fetchMutualFunds, fetchCategoryFunds } from "../../features/MutualFunds/mutualFundsThunk";
import { useParams, useNavigate } from "react-router-dom";

function CategoryFunds() {
  const { category } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fundsByCategory, loading, error , categories} = useSelector((state) => state.mutualFunds);
  const data = categories

  const funds = Array.isArray(fundsByCategory?.[category]) ? fundsByCategory[category] : [];

  useEffect(() => {
    dispatch(fetchCategoryFunds()); // Fetch all categories
  }, [dispatch]);

  useEffect(() => { 

    if (category) { 
      dispatch(fetchMutualFunds({ category })); // Fetch funds for selected category
    }
  }, [dispatch, category]);

  console.log('data = ',data)
console.log('categroy/fund name ' , data[category].name)

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6">

        {data[category-1].name} Funds

      </h1>

      {/* Category Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">

        {Array.isArray(category) && category.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate(`/mutual-funds/${cat}`)}
            className={`px-5 py-2 rounded-full font-medium transition duration-300 shadow-md ${
              category === cat.toLowerCase()

                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-center text-red-600 mt-4 bg-red-100 border border-red-400 p-3 rounded-lg">
           {/* Error: {error} */}
            Cannot retrieve funds 
        </p>
      )}

      {/* Loading Indicator */}
      {loading && (
        <p className="text-center animate-pulse text-green-700 text-lg mt-4">
           Loading funds...
        </p>
      )}

      {/* Funds List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {funds.length > 0 ? (
          funds.map((fund) => (
            <div
              key={fund.fund_id}
              className="p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-green-700">{fund.scheme_name}</h3>
              <p className="text-gray-700 mt-1 font-medium">{fund.category} Fund</p>
              <p className="text-gray-500 text-sm">📈 Returns: {fund.ytd_return}%</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full text-lg">
            No funds available for <span className="font-semibold">{data[category-1].name}</span>.
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryFunds;