export const Values = () => {
  const values = [
    "Everyone has something to offer",
    "Connection with others is a vital need",
    "Encourage friendliness",
    "Embrace the fundamental human concept of trade",
  ];

  return (
    <section className="py-20 bg-navy text-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lato text-center mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-accent-blue bg-opacity-20 p-6 rounded-lg">
              <p className="text-xl font-satisfy">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};