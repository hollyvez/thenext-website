import { JoinNeighborhoodModal } from "@/components/JoinNeighborhoodModal";

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
          <JoinNeighborhoodModal />
        </div>
      </div>
    </section>
  );
};