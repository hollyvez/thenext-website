import { JoinNeighborhoodModal } from "@/components/JoinNeighborhoodModal";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream animate-gradient-x" />
      
      {/* Floating circles decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-accent-blue/10 to-accent-green/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-accent-orange/10 to-accent-yellow/10 rounded-full blur-3xl animate-float" />
      </div>
      
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
            <h1 className="text-6xl md:text-7xl font-lato font-light tracking-tight">
              <span className="font-satisfy bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">TheNEXT</span>
              <span className="block text-2xl md:text-3xl mt-4 text-gray-700 font-normal tracking-wide bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                neighborhood exchange trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-pulse-slow">
              Connecting Communities, One Neighbor at a Time
            </p>
          </div>
          
          {/* Enhanced button container with gradient animation */}
          <div className="mt-12 animate-fade-up relative group" style={{ animationDelay: '200ms' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue via-accent-green to-accent-blue rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy blur"></div>
            <JoinNeighborhoodModal />
          </div>
        </div>
      </div>

      {/* Enhanced decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-cream to-transparent opacity-60" />
    </section>
  );
};