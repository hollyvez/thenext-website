import { JoinNeighborhoodModal } from "@/components/JoinNeighborhoodModal";

export const Hero = () => {
  return (
    <section className="relative bg-cream min-h-[80vh] flex items-center">
      <div className="absolute inset-0 opacity-10 z-0">
        <img 
          src="/lovable-uploads/eac3ea5b-3c7d-450e-8ad5-d2978c689c08.png" 
          alt="Colorful neighborhood houses"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6">
            <img 
              src="/lovable-uploads/4b8f1b15-8d81-4aeb-b1c3-93e8c08f043c.png" 
              alt="TheNEXT logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-lato font-light text-navy mb-6 animate-fade-up">
            <span className="font-satisfy text-accent-blue">TheNEXT</span>
            <span className="block text-2xl md:text-3xl mt-2">neighborhood exchange trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-up">
            Connecting Communities, One Neighbor at a Time
          </p>
          <JoinNeighborhoodModal />
        </div>
      </div>
    </section>
  );
};