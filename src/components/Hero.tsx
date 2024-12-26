import { JoinNeighborhoodModal } from "@/components/JoinNeighborhoodModal";

export const Hero = () => {
  return (
    <section className="relative bg-cream min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/60f552fc-d0aa-448d-a18a-d6fa3463db79.png" 
          alt="Colorful neighborhood illustration" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/2f0ec477-b23a-40f9-8c51-722a9d86987f.png"
            alt="TheNEXT logo"
            className="w-24 h-24 mx-auto mb-6"
          />
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