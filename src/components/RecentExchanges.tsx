export const RecentExchanges = () => {
  const exchanges = [
    {
      offered: "Soccer Cleats",
      received: "Bike Helmet",
      story: "Perfect timing! My son outgrew his cleats just as Sarah's daughter needed a new pair.",
    },
    {
      offered: "Fresh Basil",
      received: "Homemade Bread",
      story: "Trading garden herbs for Tom's amazing sourdough is now our weekly tradition!",
    },
    {
      offered: "Bookshelf",
      received: "Garden Plums",
      story: "My old bookshelf found a new home, and I got the sweetest plums from Maria's garden.",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lato text-navy text-center mb-16">Recent Exchanges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exchanges.map((exchange, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <span className="text-lg font-satisfy text-accent-green">{exchange.offered}</span>
                <span className="mx-4 text-gray-400">↔</span>
                <span className="text-lg font-satisfy text-accent-blue">{exchange.received}</span>
              </div>
              <p className="text-gray-600 italic">{exchange.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};