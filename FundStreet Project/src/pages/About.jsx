function About() {
  return (
    <div className="text-gray-900">

      <section className="bg-[#51b18a] text-white text-center py-20 px-6 rounded-2xl">
        <h1 className="text-4xl font-bold">About FundStreet</h1>
        <p className="text-lg mt-2">We help you invest smarter and grow your wealth.</p>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          At FundStreet, we aim to simplify investment decisions and empower individuals with the tools they need to
          grow their financial future with confidence.
        </p>
      </section>

      <section className="bg-[#52be93] py-16 px-6 rounded-2xl mb-8">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-[#CAE5DA] via-[#CAE5DA] to-[#96dfe1]">
            <h3 className="text-xl font-semibold">Name</h3>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-[#CAE5DA] via-[#CAE5DA] to-[#96dfe1]">
            <h3 className="text-xl font-semibold">Name</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;