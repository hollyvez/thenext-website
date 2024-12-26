import { JoinNeighborhoodModal } from "@/components/JoinNeighborhoodModal";

export const Hero = () => {
  return (
    <section className="relative bg-cream min-h-[80vh] flex items-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img 
          src="/lovable-uploads/9ba8547f-936d-4a1a-a20e-2ad97136eb96.png" 
          alt="Handshake illustration" 
          className="w-[500px] h-auto"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
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