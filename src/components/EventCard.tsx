import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function EventCard({ title, date, location, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
        Register Now
      </button>
    </div>
  );
}