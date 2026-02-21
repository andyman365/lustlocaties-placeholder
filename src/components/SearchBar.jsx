'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkin: '',
    checkout: '',
    guests: '2',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchData);
    // TODO: Implement search logic
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl">
      <div className="glass border border-glass backdrop-blur-md bg-neutral-900/40 rounded-2xl p-6 md:p-8 shadow-xl border-secondary-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location Input */}
          <div className="flex flex-col">
            <label className="text-neutral-300 text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City or region"
              value={searchData.location}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors"
            />
          </div>

          {/* Check-in Input */}
          <div className="flex flex-col">
            <label className="text-neutral-300 text-sm font-medium mb-2">Check In</label>
            <input
              type="date"
              name="checkin"
              value={searchData.checkin}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-50 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors"
            />
          </div>

          {/* Check-out Input */}
          <div className="flex flex-col">
            <label className="text-neutral-300 text-sm font-medium mb-2">Check Out</label>
            <input
              type="date"
              name="checkout"
              value={searchData.checkout}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-50 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors"
            />
          </div>

          {/* Guests Input */}
          <div className="flex flex-col">
            <label className="text-neutral-300 text-sm font-medium mb-2">Guests</label>
            <select
              name="guests"
              value={searchData.guests}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-50 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4+">4+ Guests</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 md:mt-8">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-primary-500 hover:bg-primary-600 text-neutral-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/50 glow-text-secondary"
          >
            Search Stays
          </button>
        </div>
      </div>
    </form>
  );
}
