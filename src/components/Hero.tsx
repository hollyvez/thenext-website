import { JoinNeighborhoodModal } from "@/components/JoinNeighborhoodModal";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-white" />
      
      {/* Background illustration with enhanced styling */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 transform scale-110 transition-transform duration-1000 hover:scale-105">
        <img 
          src="/lovable-uploads/9ba8547f-936d-4a1a-a20e-2ad97136eb96.png" 
          alt="Handshake illustration" 
          className="w-[600px] h-auto"
        />
      </div>

      {/* Content with improved typography and animations */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-up">
            <h1 className="text-6xl md:text-7xl font-lato font-light text-navy tracking-tight">
              <span className="font-satisfy text-accent-blue inline-block transform hover:scale-105 transition-transform duration-300">TheNEXT</span>
              <span className="block text-2xl md:text-3xl mt-4 text-gray-700 font-normal tracking-wide">
                neighborhood exchange trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Connecting Communities, One Neighbor at a Time
            </p>
          </div>
          
          {/* Enhanced button container */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <JoinNeighborhoodModal />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-60" />
    </section>
  );
};