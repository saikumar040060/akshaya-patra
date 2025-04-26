// components/ui/HeroSection.tsx
// components/ui/HeroSection.tsx
export default function HeroSection() {
    return (
      <section
        className="w-full h-screen bg-cover bg-center flex items-center px-10"
        style={{
          backgroundImage: "url('/images/hero-clean.png')",
        }}
      >
        <div className="text-white max-w-2xl space-y-6">
          <h1 className="text-6xl font-bold text-orange-400">
            Indian <span className="text-white">Cuisine</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Experience the rich and vibrant flavors of traditional Indian dishes.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
            Order Now
          </button>
        </div>
      </section>
    );
  }
  