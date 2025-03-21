import React, { useState } from 'react';

// Updated arts array with more realistic image URLs
const arts = [
  { id: 1, name: 'Phad Painting', description: 'Scroll paintings depicting folk epics and religious tales of local deities and heroes, characterized by bold colors and stylized forms.', image: 'https://i.pinimg.com/originals/13/8f/70/138f70641c6a6f00934774f839a33135.jpg', artist: 'Shrilal Joshi' },
  { id: 2, name: 'Miniature Painting', description: 'Detailed paintings on small scale featuring intricate details of royal life, court scenes, hunting expeditions and religious themes.', image: 'https://i.pinimg.com/originals/22/26/5d/22265d74fa91c3521d7377b2a75173ac.jpg', artist: 'Ram Singh' },
  { id: 3, name: 'Blue Pottery', description: 'Glazed pottery in vibrant blue and white colors, featuring Persian-inspired motifs of flowers, animals and geometric patterns.', image: 'https://www.jaipurstuff.com/wp-content/uploads/2020/01/Blue-Pottery-of-Jaipur-1.jpg', artist: 'Kripal Singh' },
  { id: 4, name: 'Thewa Art', description: 'Gold work on molten glass creating intricate designs, primarily used in jewelry. This traditional craft originated in Pratapgarh, Rajasthan.', image: 'https://5.imimg.com/data5/BB/CV/MY-3019569/thewa-art-jewellery-500x500.jpg', artist: 'Soni Family' },
  { id: 5, name: 'Bandhani', description: 'Ancient tie-dye textile art creating colorful patterns on fabric by tying small portions with thread before dyeing.', image: 'https://i.pinimg.com/originals/3f/5b/8a/3f5b8a1cda383e1b291a13216d5896c5.jpg', artist: 'Leela Devi' },
  { id: 6, name: 'Kathputli', description: 'Traditional string puppetry with intricately designed wooden puppets depicting folk tales and legends of Rajasthan.', image: 'https://www.theoriginaltour.com/wp-content/uploads/2019/09/rajasthani-puppet.jpg', artist: 'Puran Bhatt' },
];

function RajasthanArts() {
  const [viewType, setViewType] = useState('arts');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  const groupByArtist = () => {
    const artistMap = {};
    arts.forEach(art => {
      if (!artistMap[art.artist]) {
        artistMap[art.artist] = [];
      }
      artistMap[art.artist].push(art);
    });
    return Object.entries(artistMap).map(([artist, works]) => ({
      name: artist,
      works,
      image: works[0].image
    }));
  };

  const displayItems = viewType === 'arts' ? arts : groupByArtist();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8 " style={{
      background: "linear-gradient(90deg, #ff7a00, #f9bc68)",
  }}>
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

        <div className="relative h-[700px] w-[700px] mx-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-500 rounded-full opacity-30"></div>
          
          {displayItems.map((item, index) => {
            const angle = index * (360 / displayItems.length);
            const radian = (angle * Math.PI) / 180;
            const x = 300 * Math.cos(radian);
            const y = 300 * Math.sin(radian);
            
            return (
              <div 
                key={index} 
                className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                onClick={() => handleItemClick(item)}
              >
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center shadow-lg border-2 border-amber-200 flex items-center justify-center overflow-hidden"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-center font-medium px-1 text-sm">{item.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-amber-800">{selectedItem.name}</h2>
                <button 
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closeDetails}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {viewType === 'arts' ? (
                <div className="flex flex-col md:flex-row gap-6">
                  <img src={selectedItem.image} alt={selectedItem.name} className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-md" />
                  <div>
                    <p className="text-gray-700 mb-4 text-lg">{selectedItem.description}</p>
                    <p className="text-amber-700 text-lg"><span className="font-bold">Artist:</span> {selectedItem.artist}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-amber-700 mb-4 text-xl"><span className="font-bold">Artist:</span> {selectedItem.name}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {selectedItem.works.map(work => (
                      <div key={work.id} className="border border-amber-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-80 overflow-hidden">
                          <img src={work.image} alt={work.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6 bg-gradient-to-b from-amber-50 to-orange-50">
                          <h3 className="text-xl font-semibold text-amber-800 mb-3">{work.name}</h3>
                          <p className="text-gray-700">{work.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RajasthanArts;