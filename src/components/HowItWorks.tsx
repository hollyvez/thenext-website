export const HowItWorks = () => {
  const steps = [
    {
      icon: "/lovable-uploads/57ad17e2-67b8-4779-afc2-eba75470e63a.png",
      title: "Connect",
      description: "Join your local neighborhood exchange network",
    },
    {
      icon: "/lovable-uploads/d1dff75f-91c7-4a41-b58a-2a131a4aeffa.png",
      title: "Exchange",
      description: "Share what you have, find what you need",
    },
    {
      icon: "/lovable-uploads/d7e06f73-eddf-45d0-927d-57c45223a07b.png",
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
                <img 
                  src={step.icon} 
                  alt={`${step.title} icon`} 
                  className={`w-24 h-24 hover:scale-110 transition-transform duration-300 animate-[spin_1s_ease-in-out_${index * 0.2}s,bounce_0.5s_ease-in-out_${0.8 + index * 0.2}s]`}
                />
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