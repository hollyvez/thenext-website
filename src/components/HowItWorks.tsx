import { Leaf, RefreshCw, Users } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <img src="/lovable-uploads/4b8f1b15-8d81-4aeb-b1c3-93e8c08f043c.png" alt="Connect icon" className="w-24 h-24" />,
      title: "Connect",
      description: "Join your local neighborhood exchange network",
      bgColor: "bg-accent-red",
    },
    {
      icon: <img src="/lovable-uploads/4b8f1b15-8d81-4aeb-b1c3-93e8c08f043c.png" alt="Exchange icon" className="w-24 h-24" />,
      title: "Exchange",
      description: "Share what you have, find what you need",
      bgColor: "bg-accent-green",
    },
    {
      icon: <img src="/lovable-uploads/4b8f1b15-8d81-4aeb-b1c3-93e8c08f043c.png" alt="Grow icon" className="w-24 h-24" />,
      title: "Grow",
      description: "Build lasting connections with your neighbors",
      bgColor: "bg-accent-blue",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lato text-navy text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`mb-6 flex justify-center items-center rounded-full p-4 mx-auto ${step.bgColor} bg-opacity-10`}>
                {step.icon}
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