import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SIPCalculator from "../components/mutualFunds/SIPCalculator";


function Home() {
  const navigate = useNavigate()

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
  console.log(isLoggedIn)

   const handleGetStarted =() => {
    { isLoggedIn ? navigate('/mutual-funds') : navigate('/login') }
  }
  
  return (
    <div className="text-gray-900">
      {/* Hero Section */}

      <section className=" relative z-10 bg-gradient-to-r from-[#52be93] to-emerald-700 text-white text-center py-20 px-6 rounded-3xl shadow-xl">
      {/* <video src="/Video.mp4" autoPlay muted playsInline loop={true} className="absolute top-0 left-0 w-full h-full object-cover z-0 " /> */}
      

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
        <div className="relative z-10" >

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to <span className="text-yellow-300">FundStreet</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Your trusted platform for investing in mutual funds with ease and confidence.
        </p>

        <button className="mt-6 px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          onClick = {handleGetStarted}
        >

          Get Started
        </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Insights",
              desc: "Get curated recommendations from industry experts.",
              icon: "📊",
            },
            {
              title: "Secure Investments",
              desc: "We ensure the highest level of security for your investments.",
              icon: "🔒",
            },
            {
              title: "Easy to Use",
              desc: "A seamless and intuitive experience for investors.",
              icon: "⚡",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 border rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Calculator Section */}

      <section className=" max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-around gap-8">

        {/* New Heading and Description */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-semibold text-green-700">
            Calculate Your Mutual Fund Returns
          </h2>
          <p className="text-gray-600 mt-4 text-justify">
          The key to maximizing returns from mutual funds lies in staying invested for the long term. Compounding works best when investments are held over an extended period, allowing your money to grow exponentially. By using a Mutual Funds Calculator, you can estimate potential returns based on factors like investment amount, tenure, and expected rate of return. This helps in setting realistic financial goals and making informed investment decisions. Whether you opt for Systematic Investment Plans (SIPs) or lump sum investments, a well-planned approach can significantly impact your wealth creation journey.
          </p>
        </div>

        {/* SIP Calculator Component */}

        <div className="bg-white w-[80%] md:w-[60%] p-8 rounded-xl shadow-lg">

          <SIPCalculator />
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="bg-[#52be93] py-20 px-6 text-white rounded-3xl max-w-7xl mx-auto mb-12 mt-12 shadow-lg">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="text-center">
          <p className="text-xl italic">
            “FundStreet has made investing so simple and accessible!”
          </p>
          <p className="mt-4 font-semibold text-lg">- John Doe</p>
        </div>
      </section>
    </div>
  );
}

export default Home;