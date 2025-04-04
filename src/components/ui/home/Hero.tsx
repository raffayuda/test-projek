export default function Hero () {
    return (
        <section className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center px-4" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Storytelling Adventures For Children</h1>
          <p className="text-lg md:text-xl mb-8">Enchanting tales that spark imagination and creativity</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/boxes" className="rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-opacity-90 transition-all">Explore Boxes</a>
            <a href="/subscription" className="rounded-full border border-white text-white px-8 py-3 font-medium hover:bg-white hover:bg-opacity-10 transition-all">Subscribe Now</a>
          </div>
        </div>
      </section>
    )
}