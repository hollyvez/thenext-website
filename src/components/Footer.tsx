import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-navy text-cream mt-16 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-satisfy text-2xl">TheNEXT</h3>
            <p className="text-sm">neighborhood exchange trust</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-lato font-bold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-accent-yellow transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-accent-yellow transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/accessibility" className="hover:text-accent-yellow transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-lato font-bold">Contact</h4>
            <Button 
              variant="outline" 
              className="bg-transparent border-cream text-cream hover:bg-cream hover:text-navy"
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-sm text-center">
          <p>&copy; 2024 TheNEXT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};