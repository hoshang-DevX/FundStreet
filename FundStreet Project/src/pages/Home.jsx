import SIPCalculator from "../components/mutualFunds/SIPCalculator";

function Home() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-600 text-white text-center py-14 px-6 rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to FundStreet
        </h1>
        <p className="text-lg md:text-xl">
          Your trusted platform for investing in mutual funds.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-green-200 p-6 border rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold">
              Expert Insights
            </h3>
            <p className="text-gray-700 mt-2 text-sm md:text-lg">
              Get curated recommendations from industry experts.
            </p>
          </div>
          <div className="bg-green-200 p-6 border rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold">
              Secure Investments
            </h3>
            <p className="text-gray-700 mt-2 text-sm md:text-lg">
              We ensure the highest level of security for your investments.
            </p>
          </div>
          <div className="bg-green-200 p-6 border rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold">Easy to Use</h3>
            <p className="text-gray-700 mt-2 text-sm md:text-lg">
              A seamless and intuitive experience for investors.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Investment Calculator
        </h2>
        <SIPCalculator />
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#52be93] py-16 px-6 text-white rounded-2xl max-w-7xl mx-auto mb-[2rem]">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          What Our Users Say
        </h2>
        <div className="text-center">
          <p className="text-lg italic">
            FundStreet has made investing so simple and accessible!
          </p>
          <p className="mt-2 font-semibold">- name</p>
        </div>
      </section>
    </div>
  );
}

export default Home;