export const Values = () => {
  const values = [
    "Everyone has something to offer",
    "Connection with others is a vital need",
    "Encourage friendliness",
    "Embrace the fundamental human concept of trade",
  ];

  return (
    <section className="py-20 bg-navy text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/eac3ea5b-3c7d-450e-8ad5-d2978c689c08.png" 
          alt="Community values"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-lato text-center mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-accent-blue bg-opacity-20 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <p className="text-xl font-satisfy">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};