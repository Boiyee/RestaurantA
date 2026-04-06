import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Award-winning chefs with 20+ years of culinary experience'
    },
    {
      icon: '🌱',
      title: 'Fresh Ingredients',
      description: 'Locally sourced, organic ingredients for every dish'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Only the finest selections to guarantee perfection'
    }
  ]

  const specials = [
    {
      name: 'Grilled Salmon',
      price: '$28',
      image: '🐟'
    },
    {
      name: 'Ribeye Steak',
      price: '$35',
      image: '🥩'
    },
    {
      name: 'Lobster Bisque',
      price: '$18',
      image: '🦞'
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark to-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Welcome to Elegance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover exquisite flavors and unforgettable dining experiences in an atmosphere of refined elegance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/menu" className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              View Menu
            </Link>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition">
              Reserve Table
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Specials */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Today's Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {specials.map((special, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="bg-gradient-to-b from-primary to-orange-300 h-32 flex items-center justify-center text-6xl">
                  {special.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-dark mb-2">{special.name}</h3>
                  <p className="text-primary font-bold text-lg">{special.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/menu" className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">Book your table today and let us serve you</p>
          <button className="bg-primary text-dark px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  )
}


/* Created by Boiyee */
