import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-cream min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-lato font-light text-navy mb-6 animate-fade-up">
            <span className="font-satisfy text-accent-blue">TheNEXT</span>
            <span className="block text-2xl md:text-3xl mt-2">neighborhood exchange trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-up">
            Connecting Communities, One Neighbor at a Time
          </p>
          <Button 
            className="bg-navy hover:bg-accent-blue text-cream text-lg px-8 py-6 rounded-full transition-all duration-300 animate-fade-up"
          >
            Join Your Neighborhood <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};