import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">🍽️ Restaurant</h3>
            <p className="text-gray-300">
              Experience fine dining at its best. Fresh ingredients, expert chefs, and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/menu" className="hover:text-primary transition">Menu</a></li>
              <li><a href="/about" className="hover:text-primary transition">About</a></li>
              <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">📍 123 Main St, City </p>
            <p className="text-gray-300 mb-4">📞 (555) 123-4567 </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-white transition text-2xl"><FaFacebook /></a>
              <a href="#" className="text-primary hover:text-white transition text-2xl"><FaTwitter /></a>
              <a href="#" className="text-primary hover:text-white transition text-2xl"><FaInstagram /></a>
              <a href="#" className="text-primary hover:text-white transition text-2xl"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center text-gray-400">
          <p>&copy; 2024 Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
