import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { id: 1, category: 'food', emoji: '🍽️', title: 'Gourmet Plating', desc: 'Beautifully presented dishes' },
    { id: 2, category: 'food', emoji: '🥩', title: 'Premium Steaks', desc: 'Perfectly cooked ribeye' },
    { id: 3, category: 'food', emoji: '🐟', title: 'Fresh Seafood', desc: 'Daily catch preparations' },
    { id: 4, category: 'food', emoji: '🍝', title: 'Pasta Creations', desc: 'Homemade pasta excellence' },
    { id: 5, category: 'ambiance', emoji: '✨', title: 'Dining Ambiance', desc: 'Elegant and refined setting' },
    { id: 6, category: 'ambiance', emoji: '🕯️', title: 'Intimate Lighting', desc: 'Candlelit elegance' },
    { id: 7, category: 'ambiance', emoji: '🎨', title: 'Interior Design', desc: 'Modern sophisticated decor' },
    { id: 8, category: 'ambiance', emoji: '🪑', title: 'Comfortable Seating', desc: 'Premium dining chairs' },
    { id: 9, category: 'events', emoji: '🎉', title: 'Special Events', desc: 'Private dining experiences' },
    { id: 10, category: 'events', emoji: '💒', title: 'Weddings', desc: 'Celebrate your special day' },
    { id: 11, category: 'events', emoji: '🎊', title: 'Corporate Events', desc: 'Business gatherings' },
    { id: 12, category: 'events', emoji: '👥', title: 'Group Reservations', desc: 'Family and friends gathering' },
  ]

  const categories = ['all', 'food', 'ambiance', 'events']

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-300">Explore the beauty of our restaurant and culinary creations</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition capitalize ${
                activeCategory === cat
                  ? 'bg-primary text-dark'
                  : 'bg-white text-dark border-2 border-primary hover:bg-primary hover:text-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-primary to-orange-400 h-48 flex items-center justify-center text-8xl">
                {image.emoji}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold text-dark mb-1">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.desc}</p>
                <button className="mt-3 text-primary font-semibold hover:underline">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-dark text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-opacity-80 z-10"
              >
                ×
              </button>
              <div className="bg-gradient-to-br from-primary to-orange-400 h-96 flex items-center justify-center text-8xl">
                {selectedImage.emoji}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-serif font-bold text-dark mb-2">{selectedImage.title}</h2>
              <p className="text-gray-600 mb-4">{selectedImage.desc}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-lg mb-6">@restaurant - Tag us in your dining photos!</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Follow @restaurant
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Experience It Yourself?</h2>
          <p className="text-xl text-gray-300 mb-6">Book your table and create your own memories with us</p>
          <button className="bg-primary text-dark px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  )
}
