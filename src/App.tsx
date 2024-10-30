import React from 'react';
import { Calendar, Users, Image, Phone, CreditCard, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventCard from './components/EventCard';
import DonationSection from './components/DonationSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-green-600 via-white to-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Telugu Ireland Yuvatha
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4">
            తెలుగు వాళ్ళ ఐక్యత కోసం
          </p>
          <p className="text-lg text-white">
            Uniting the Telugu Community in Ireland
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-gray-600">
              We serve the Telugu community in Ireland through various initiatives and events, 
              fostering networking and cultural exchange.
            </p>
            <div className="space-y-2 text-lg font-medium text-gray-800">
              <p>తెలుగు సంప్రదాయాల సంరక్షణ కోసం</p>
              <p>తెలుగు జాతి భవిష్యత్తు కోసం</p>
              <p>జై హింద్, జై భారత్</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50" id="events">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              title="Ugadi Celebrations"
              date="April 9, 2024"
              location="Dublin Community Center"
              description="Join us for Telugu New Year celebrations with cultural programs and traditional food."
            />
            {/* Add more EventCard components for other events */}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white" id="team">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="font-semibold text-xl">Venkat Kasturi</h3>
              <p className="text-gray-600">President</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="font-semibold text-xl">Ajay Polampalli</h3>
              <p className="text-gray-600">Vice President</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="font-semibold text-xl">Kiran Anugurthi</h3>
              <p className="text-gray-600">Chief Advisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Groups */}
      <section className="py-16 bg-gray-50" id="whatsapp-groups">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our WhatsApp Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Accommodation', link: 'https://chat.whatsapp.com/H3GO2GsI9lr8CZF0aO2BKG' },
              { name: 'Arts', link: 'https://chat.whatsapp.com/Krxh9pC330yGokN2youazo' },
              { name: 'Events', link: 'https://chat.whatsapp.com/Gp170pmDzBR3YnAd91G4m7' },
              { name: 'Marketing', link: 'https://chat.whatsapp.com/BavAJoTcBHXDc7FBiNreu3' },
            ].map((group, index) => (
              <a
                key={index}
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-semibold text-lg mb-2">{group.name}</h3>
                <p className="text-green-600 text-sm">Click to Join</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <DonationSection />

      <Footer />
    </div>
  );
}

export default App;