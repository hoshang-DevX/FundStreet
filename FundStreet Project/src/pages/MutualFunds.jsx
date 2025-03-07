import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryFunds } from "../features/MutualFunds/mutualFundsThunk";
import { useNavigate } from "react-router-dom";

function MutualFunds() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, categories} = useSelector((state) => state.mutualFunds);

  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    dispatch(fetchCategoryFunds());
  }, [dispatch]);


  const category = categories;
  console.log('category in Mf page' ,category)
  // const categories = ["Large Cap", "Mid Cap", "Small Cap"];

  const handleCategoryClick = (category_id) => {
    navigate(`/mutual-funds/${category_id}`);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#52be93] to-emerald-700 text-white text-center py-16 px-8 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-extrabold">Mutual Funds</h1>
        <p className="text-lg mt-4">
          Invest in top-performing mutual funds and grow your wealth.
        </p>
      </section>

      {/* Introduction */}
      <section className="mt-12 p-8 bg-white shadow-lg rounded-3xl text-center">
        <h2 className="text-3xl font-bold text-green-700">What Are Mutual Funds?</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Mutual funds pool money from multiple investors and invest in diversified portfolios, including stocks and bonds.
          They are managed by professionals and are a great way to start investing.
        </p>
      </section>

      {/* Investment Strategies */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-green-700 text-center">Investment Strategies</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-green-800">Systematic Investment Plan (SIP)</h3>
            <p className="text-gray-700 mt-2">
              Invest small amounts at regular intervals and benefit from compounding and rupee-cost averaging.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-xl font-bold text-green-800">Lump Sum Investment</h3>
            <p className="text-gray-700 mt-2">
              Invest a one-time amount and maximize returns over a longer period.
            </p>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-green-700">Explore Mutual Funds by Category</h2>
        <div className="flex justify-center gap-6 mt-6">


          {category?.map((category) => (
            <button
              key={category?.id}
              onClick={() => handleCategoryClick(category?.id)}
              className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              {category?.name}

            </button>
          ))}
        </div>
      </section>

      {/* Why Choose FundStreet? */}
      <section className="mt-12 bg-white shadow-lg rounded-3xl p-8 text-center">
        <h2 className="text-3xl font-bold text-green-700">Why Choose FundStreet?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { title: "Expert Recommendations", desc: "Curated mutual funds by experts." },
            { title: "Secure Transactions", desc: "High-end encryption for safe investing." },
            { title: "User-Friendly Interface", desc: "Seamless experience for all investors." },
            { title: "Low-Cost Investing", desc: "Transparent pricing with minimal fees." },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-green-100 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mt-4">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-green-700 text-center">Frequently Asked Questions</h2>
        <div className="mt-6 bg-white shadow-lg rounded-3xl p-6">
          {[
            { question: "What is the minimum investment for mutual funds?", answer: "You can start with as little as ₹500 per month via SIP." },
            { question: "Can I withdraw my money anytime?", answer: "Yes, except for funds with a lock-in period, like ELSS." },
            { question: "Are mutual funds safe?", answer: "They are subject to market risks. Choose funds based on your risk tolerance." },
          ].map((faq, index) => (
            <div key={index} className="border-b py-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-bold text-green-700 flex justify-between">
                {faq.question}
                <span>{openFAQ === index ? "➖" : "➕"}</span>
              </h3>
              {openFAQ === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Loading & Error Messages */}
      {loading && (
        <div className="mt-6 text-center">
          <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-2 text-green-700 text-lg font-semibold">Fetching Mutual Funds...</p>
        </div>
      )}
      {error && (
        <div className="mt-6 text-center text-red-600 bg-red-100 py-3 px-6 rounded-lg shadow-md">
           Error: {error}
        </div>
      )}
    </div>
  );
}

export default MutualFunds;