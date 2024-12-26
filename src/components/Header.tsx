import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-cream py-4 px-4 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-satisfy text-navy">TheNEXT</h1>
          <span className="text-sm text-gray-600 hidden sm:inline">neighborhood exchange trust</span>
        </div>
        
        <Button 
          variant="outline" 
          className="bg-navy text-cream hover:bg-accent-blue border-none"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </div>
    </header>
  );
};