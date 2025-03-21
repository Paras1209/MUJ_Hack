import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MonChoice from '../assets/rajasthanArts/Monchoice.jpg'
function HeritageChoice() {
    const navigate = useNavigate();

    const handleMonumentalClick = () => {
        navigate('/monumentsHeritage/rajasthan');
    };
    const handleArtsClick = () => {
        navigate('/artsHeritage/rajasthan');
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{
            background: `linear-gradient(rgba(255, 122, 0, 0.8), rgba(249, 188, 104, 0.8)), url(${MonChoice})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 "
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore Rajasthan's Rich Heritage</h1>
                <p className="text-xl text-white max-w-3xl mx-auto">Discover the vibrant tapestry of Rajasthan's cultural legacy through its magnificent monuments and exquisite art forms.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleMonumentalClick} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
                >
                    <div className="h-64 bg-amber-700 bg-opacity-90 flex items-center justify-center p-6 ">
                        <h2 className="text-3xl font-bold text-white">Monumental Heritage</h2>
                    </div>
                    <div className="p-6">
                        <p className="text-amber-800">Explore majestic forts, opulent palaces, and intricate temples that stand as testaments to Rajasthan's royal past.</p>
                    </div>
                </motion.div>
                
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleArtsClick} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
                >
                    <div className="h-64 bg-orange-600 bg-opacity-90 flex items-center justify-center p-6">
                        <h2 className="text-3xl font-bold text-white">Artistic Heritage</h2>
                    </div>
                    <div className="p-6">
                        <p className="text-amber-800">Immerse yourself in the vibrant folk arts, intricate handicrafts, and colorful traditions that define Rajasthan's cultural identity.</p>
                    </div>
                </motion.div>
            </div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 text-center text-white italic"
            >
                "A journey through Rajasthan is a journey through centuries of artistic brilliance and architectural marvels."
            </motion.p>
        </div>
    )
}

export default HeritageChoice
// function HeritageChoice() {
//     const navigate = useNavigate();

//     const handleMonumentalClick = () => {
//         navigate('/monumentsHeritage/rajasthan');
//     };
//     const handleArtsClick=()=>{
//         navigate('/artsHeritage/rajasthan');
//     }

//     return (
//         <div>
//             <div onClick={handleMonumentalClick} style={{ cursor: 'pointer' }}>monumental</div>
//             <div onClick={handleArtsClick} style={{ cursor: 'pointer' }}>arts</div>
//         </div>
//     )
// }

// export default HeritageChoice
