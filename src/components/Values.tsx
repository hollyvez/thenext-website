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
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/b493ccf9-073e-471a-8028-815dd16e69a2.png" 
              alt="Handshake illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-accent-blue bg-opacity-20 p-6 rounded-lg">
                <p className="text-xl font-satisfy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};