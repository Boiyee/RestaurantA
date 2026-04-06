import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">We'd love to hear from you. Get in touch with us today.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            { icon: '📍', title: 'Address', content: '123 Culinary Street, Gourmet District' },
            { icon: '📞', title: 'Phone', content: '(555) 123-4567' },
            { icon: '✉️', title: 'Email', content: 'info@restaurant.com' }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-serif font-bold text-dark mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-dark font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Inquiry or Reservation"
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Tell us anything..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
              {submitted && (
                <div className="bg-green-100 border-l-4 border-green-500 p-4 text-green-700">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Map & Hours */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-md h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <p className="text-gray-600 font-semibold">Google Maps Integration</p>
                <p className="text-sm text-gray-500">Replace with embedded map</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span>Monday - Thursday</span>
                  <span className="text-primary">11 AM - 10 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                  <span>Friday - Saturday</span>
                  <span className="text-primary">11 AM - 11 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-primary">12 PM - 9 PM</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-300">
                🎉 Closed on major holidays. Please check with us for special events!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-dark">
          <h2 className="text-3xl font-serif font-bold mb-4">Want to Dine With Us Soon?</h2>
          <p className="text-lg mb-6">Call us or use the form above to make a reservation</p>
          <button className="bg-dark text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Reserve Your Table
          </button>
        </div>
      </section>
    </div>
  )
}


/* Created by Boiyee */
