import { Leaf, RefreshCw, Users } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-accent-green" />,
      title: "Connect",
      description: "Join your local neighborhood exchange network",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-accent-orange" />,
      title: "Exchange",
      description: "Share what you have, find what you need",
    },
    {
      icon: <Leaf className="w-12 h-12 text-accent-blue" />,
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
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-satisfy text-navy mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};