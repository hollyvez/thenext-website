import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RecentExchanges } from "@/components/RecentExchanges";
import { Values } from "@/components/Values";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="font-lato">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <HowItWorks />
        <RecentExchanges />
        <Values />
      </main>
      <Footer />
    </div>
  );
};

export default Index;