const services = [
  {
    title: "Hospital Staff Support",
  },
  {
    title: "Home Health & Elderly Care",
  },
  {
    title: "Critical & Specialized Nursing",
  },
  {
    title: "Training & Skill Development",
  },
  {
    title: "Placement & Staffing Consultation",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-10">
          Services we offered
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="w-14 h-14 bg-orange-300 rounded-lg mb-4" />

              <h3 className="font-semibold text-black text-lg mb-4">
                {service.title}
              </h3>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
