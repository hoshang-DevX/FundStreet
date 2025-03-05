function About() {
  return (
    <div className="text-gray-900 bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#52be93] to-emerald-700 text-white text-center py-20 px-6 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-extrabold animate-fade-in">About <span className="text-yellow-300">FundStreet</span></h1>
        <p className="text-lg mt-4 max-w-xl mx-auto leading-relaxed">
          We help you invest smarter and grow your wealth with confidence.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-8">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At FundStreet, we aim to simplify investment decisions and empower individuals with the tools they need
          to grow their financial future with confidence.
        </p>
      </section>

      {/* Meet Our Team */}
      <section className="bg-[#52be93] py-20 px-6 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Name", role: "CEO & Founder" },
            { name: "Name", role: "Chief Investment Officer" },
            { name: "Name", role: "Head of Research" },
          ].map((member, index) => (
            <div
              key={index}
              className="p-8 border rounded-xl bg-gradient-to-br from-[#CAE5DA] to-[#96dfe1] shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
              <p className="text-gray-700 text-md mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;