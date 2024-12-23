import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RecentExchanges } from "@/components/RecentExchanges";
import { Values } from "@/components/Values";

const Index = () => {
  return (
    <div className="font-lato">
      <Hero />
      <HowItWorks />
      <RecentExchanges />
      <Values />
    </div>
  );
};

export default Index;