export default function About() {
  const team = [
    {
      name: 'Chef Marco',
      role: 'Executive Chef',
      bio: 'Award-winning chef with 25 years of international culinary experience',
      emoji: '👨‍🍳'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head Sommelier',
      bio: 'Expert in wine pairing and beverage selection from around the world',
      emoji: '🥂'
    },
    {
      name: 'James Chen',
      role: 'Restaurant Manager',
      bio: 'Dedicated to creating unforgettable dining experiences for every guest',
      emoji: '🎩'
    },
  ]

  const openingHours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' },
  ]

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Discover our story and passion for fine dining</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-dark mb-6">Our Journey</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in 2010, our restaurant has been a beacon of culinary excellence in the city. What started as a small family venture has grown into one of the most sought-after dining destinations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our commitment to using only the finest, locally-sourced ingredients and our passion for innovative cooking techniques have earned us numerous accolades and the loyalty of our guests.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every dish is a masterpiece, every meal an unforgettable experience. We believe in the power of food to bring people together and create lasting memories.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary to-orange-400 rounded-lg p-12 text-center">
            <div className="text-8xl mb-4">🍽️</div>
            <p className="text-2xl font-serif font-bold text-dark">Years of Excellence</p>
            <p className="text-4xl font-bold text-dark mt-2">Since 2010</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-dark mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-8 rounded-lg bg-light shadow-md hover:shadow-lg transition">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-serif font-bold text-dark mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Opening Hours */}
          <div className="bg-dark text-white p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Opening Hours</h3>
            <div className="space-y-4">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between border-b border-gray-600 pb-3">
                  <span className="font-semibold">{schedule.day}</span>
                  <span className="text-primary">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Location */}
          <div className="bg-primary p-8 rounded-lg text-dark">
            <h3 className="text-2xl font-serif font-bold mb-6">Visit Us</h3>
            <p className="mb-4 text-lg"><strong>📍 Address:</strong></p>
            <p className="mb-6 leading-relaxed">
              123 Culinary Street<br />
              Gourmet District<br />
              City, State 12345
            </p>
            <p className="mb-2 text-lg"><strong>📞 Phone:</strong></p>
            <p className="mb-6">(555) 123-4567</p>
            <p className="mb-2 text-lg"><strong>✉️ Email:</strong></p>
            <p>info@restaurant.com</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-light py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-dark mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Quality', icon: '⭐', desc: 'We never compromise on quality' },
              { title: 'Innovation', icon: '💡', desc: 'Constantly evolving our cuisine' },
              { title: 'Service', icon: '🤝', desc: 'Excellence in every interaction' },
              { title: 'Sustainability', icon: '🌱', desc: 'Respecting our environment' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="text-xl font-semibold text-dark mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
