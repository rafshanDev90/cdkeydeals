export default function GamesCollectionPage() {
  return (
    <section className="py-12 bg-muted/30 dark:bg-muted/20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Games Collection</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the best deals on game keys for Steam, Xbox, PlayStation, and more. Instant delivery, secure purchases.
          </p>
        </div>
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-xl">
          <p className="text-muted-foreground text-lg">Games collection coming soon...</p>
        </div>
      </div>
    </section>
  );
}
