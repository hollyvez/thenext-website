import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

export const JoinNeighborhoodModal = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    neighborhood: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Registration Successful!",
      description: "Thank you for joining TheNEXT. We'll be in touch soon!",
    });
    
    // Close the modal
    setOpen(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      neighborhood: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-navy hover:bg-accent-blue text-cream text-lg px-8 py-6 rounded-full transition-all duration-300 animate-fade-up"
        >
          Join Your Neighborhood <ArrowRight className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-satisfy text-navy text-center">Join TheNEXT</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Neighborhood Name (Optional)</Label>
            <Input
              id="neighborhood"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-navy hover:bg-accent-blue text-cream"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};