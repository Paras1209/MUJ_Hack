import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import all art images properly
import phadArt from '../assets/rajasthanArts/phad-art[1].jpg';
import miniatureArt from '../assets/rajasthanArts/Miniature_painting[1].jpg';
import bluePottery from '../assets/rajasthanArts/blue_pottery[1].jpg';
import thewaArt from '../assets/rajasthanArts/thewa[1].jpg';
import bandhani from '../assets/rajasthanArts/bandhani[1].jpg';
import kathputli from '../assets/rajasthanArts/KATHPUTLI[1].jpg';

// Updated arts array with proper image imports
const arts = [
  { id: 1, name: 'Phad Painting', description: 'Scroll paintings depicting folk epics and religious tales of local deities and heroes, characterized by bold colors and stylized forms.', image: phadArt, artist: 'Shrilal Joshi', story: 'Phad paintings originated in Rajasthan around 700 years ago. These scroll paintings serve as a portable temple for traveling bards who move from village to village, narrating epic folk stories of local deities.' },
  { id: 2, name: 'Miniature Painting', description: 'Detailed paintings on small scale featuring intricate details of royal life, court scenes, hunting expeditions and religious themes.', image: miniatureArt, artist: 'Ram Singh', story: 'Rajasthani miniature paintings emerged in the 16th century under royal patronage. The art form is characterized by its intricate brushwork, vibrant colors, and detailed portrayal of court life and mythology.' },
  { id: 3, name: 'Blue Pottery', description: 'Glazed pottery in vibrant blue and white colors, featuring Persian-inspired motifs of flowers, animals and geometric patterns.', image: bluePottery, artist: 'Kripal Singh', story: 'Blue Pottery came to Jaipur from Persia and Afghanistan via Mughal courts. Unlike conventional pottery, it is made from quartz stone powder, not clay, giving it a distinctive character and appeal.' },
  { id: 4, name: 'Thewa Art', description: 'Gold work on molten glass creating intricate designs, primarily used in jewelry. This traditional craft originated in Pratapgarh, Rajasthan.', image: thewaArt, artist: 'Soni Family', story: 'Thewa art dates back to the Mughal era and was perfected by the Soni family of Pratapgarh. This unique craft involves fusing intricate gold designs onto molten glass to create spectacular jewelry pieces.' },
  { id: 5, name: 'Bandhani', description: 'Ancient tie-dye textile art creating colorful patterns on fabric by tying small portions with thread before dyeing.', image: bandhani, artist: 'Leela Devi', story: 'Bandhani is one of the oldest tie-dye techniques in India, dating back 5,000 years. The term comes from the Sanskrit word "bandh" meaning "to tie." Each region in Rajasthan has its distinct patterns and color combinations.' },
  { id: 6, name: 'Kathputli', description: 'Traditional string puppetry with intricately designed wooden puppets depicting folk tales and legends of Rajasthan.', image: kathputli, artist: 'Puran Bhatt', story: 'Kathputli puppetry emerged over 1,000 years ago as entertainment for royal courts. These wooden marionettes bring to life Rajasthani folklore and epic tales through skilled manipulation and vocal storytelling.' },
];

// Group arts by artists for the artist view
const artistsData = {};
arts.forEach(art => {
  if (!artistsData[art.artist]) {
    artistsData[art.artist] = { name: art.artist, works: [] };
  }
  artistsData[art.artist].works.push(art);
});
const artists = Object.values(artistsData);

function RajasthanArts() {
  const [viewType, setViewType] = useState('arts');
  const navigate = useNavigate();

  const handleArtClick = (art) => {
    // In a real app, you would navigate to a dedicated page
    // For this example, we'll log and simulate navigation
    console.log(`Navigating to art page: ${art.name}`);
    
    // You would implement this route in your app
    // navigate(`/art/${art.id}`);
    
    // For demo purposes, open a new window with art details
    localStorage.setItem('selectedArt', JSON.stringify(art));
    window.open('/art-details', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">Rajasthan Arts & Heritage</h1>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${viewType === 'arts' 
                ? 'bg-amber-600 text-white' 
                : 'bg-white text-amber-700 hover:bg-amber-100'}`}
              onClick={() => setViewType('arts')}
            >
              View by Arts
            </button>
            <button 
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${viewType === 'artists' 
                ? 'bg-amber-600 text-white' 
                : 'bg-white text-amber-700 hover:bg-amber-100'}`}
              onClick={() => setViewType('artists')}
            >
              View by Artists
            </button>
          </div>
        </div>

        {viewType === 'arts' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arts.map(art => (
              <div 
                key={art.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handleArtClick(art)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-2">{art.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{art.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-amber-600">Artist: {art.artist}</span>
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">{artist.name}</h3>
                  <p className="text-gray-700 mb-3">Specialized in:</p>
                  <ul className="space-y-2">
                    {artist.works.map(work => (
                      <li 
                        key={work.id}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-amber-50 cursor-pointer"
                        onClick={() => handleArtClick(work)}
                      >
                        <img src={work.image} alt={work.name} className="w-12 h-12 rounded-full object-cover" />
                        <span className="text-amber-700">{work.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RajasthanArts;
