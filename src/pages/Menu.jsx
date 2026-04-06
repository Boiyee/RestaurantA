import { useState } from 'react'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const menuItems = {
    appetizers: [
      { name: 'Shrimp Cocktail', price: '$12', description: 'Chilled shrimp with cocktail sauce' },
      { name: 'Bruschetta', price: '$10', description: 'Toasted bread with tomato and garlic' },
      { name: 'Calamari Fritti', price: '$14', description: 'Fried squid with lemon aioli' },
      { name: 'Cheese Board', price: '$16', description: 'Selection of fine cheeses and cured meats' },
    ],
    mains: [
      { name: 'Ribeye Steak', price: '$35', description: '12oz premium cut with herb butter' },
      { name: 'Grilled Salmon', price: '$28', description: 'Fresh Atlantic salmon with lemon glaze' },
      { name: 'Lobster Tail', price: '$42', description: 'Butter-poached with seasonal vegetables' },
      { name: 'Duck Breast', price: '$32', description: 'Pan-seared with cherry gastrique' },
    ],
    pasta: [
      { name: 'Fettuccine Alfredo', price: '$18', description: 'Creamy parmesan sauce with fresh pasta' },
      { name: 'Spaghetti Carbonara', price: '$20', description: 'Classic Italian with guanciale and egg' },
      { name: 'Pappardelle Bolognese', price: '$22', description: 'Wide ribbons with slow-cooked meat sauce' },
      { name: 'Seafood Linguine', price: '$26', description: 'Fresh catch with white wine sauce' },
    ],
    desserts: [
      { name: 'Tiramisu', price: '$9', description: 'Classic Italian dessert with mascarpone' },
      { name: 'Chocolate Lava Cake', price: '$10', description: 'Warm chocolate cake with molten center' },
      { name: 'Panna Cotta', price: '$8', description: 'Vanilla cream with berry compote' },
      { name: 'Crème Brûlée', price: '$9', description: 'Caramelized sugar custard' },
    ],
  }

  const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'desserts', label: 'Desserts' },
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-300">Carefully curated dishes from around the world</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-primary text-dark'
                  : 'bg-white text-dark border-2 border-primary hover:bg-primary hover:text-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-primary">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif font-bold text-dark">{item.name}</h3>
                <span className="text-primary font-bold text-xl">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Beverages Section */}
        <div className="bg-gradient-to-r from-primary to-orange-400 rounded-lg p-8 text-dark">
          <h2 className="text-3xl font-serif font-bold mb-6">Beverages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-90 p-4 rounded">
              <h4 className="font-bold mb-1">Wine Selection</h4>
              <p>Curated wines from around the world - Ask our sommelier for recommendations</p>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded">
              <h4 className="font-bold mb-1">Signature Cocktails</h4>
              <p>Craft cocktails created by our expert mixologists</p>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded">
              <h4 className="font-bold mb-1">Non-Alcoholic</h4>
              <p>Fresh juices, sodas, and specialty drinks</p>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded">
              <h4 className="font-bold mb-1">Coffee & Tea</h4>
              <p>Premium selections to complete your meal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Dine With Us?</h2>
          <button className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  )
}


/* Created by Boiyee */
