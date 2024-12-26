export const HowItWorks = () => {
  const steps = [
    {
      icon: "/lovable-uploads/813f97b3-e9e7-458d-917b-e74688c1bfe0.png",
      title: "Connect",
      description: "Join your local neighborhood exchange network",
    },
    {
      icon: "/lovable-uploads/7323a8eb-e1e3-473e-bf98-8a55d5cded57.png",
      title: "Exchange",
      description: "Share what you have, find what you need",
    },
    {
      icon: "/lovable-uploads/f85e07e6-95cc-495e-b3b7-9dcb9c93cd3b.png",
      title: "Grow",
      description: "Build lasting connections with your neighbors",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lato text-navy text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <img src={step.icon} alt={step.title} className="w-24 h-24 transition-transform hover:scale-110" />
              </div>
              <h3 className="text-2xl font-satisfy text-navy mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};