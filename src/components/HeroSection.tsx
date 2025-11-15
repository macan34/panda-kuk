import { useState, useEffect } from 'react';
import PandaIcon from './PandaIcon';
import ForceYesModal from './ForceYesModal';

interface HeroSectionProps {
  onYes: () => void;
  onNo: () => void;
  noClickCount: number;
  setNoClickCount: (count: number) => void;
}

export default function HeroSection({ onYes, onNo, noClickCount, setNoClickCount }: HeroSectionProps) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showForceModal, setShowForceModal] = useState(false);

  useEffect(() => {
    if (noClickCount >= 3) {
      setShowForceModal(true);
    }
  }, [noClickCount]);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setNoButtonPos({ x: randomX, y: randomY });
    onNo();
  };

  const handleForceYes = () => {
    setShowForceModal(false);
    setNoClickCount(0);
    onYes();
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-16 text-center relative z-10">
      <div className="mb-8 animate-bounce-slow">
        <PandaIcon type="wave" size={120} />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-4 animate-fade-in">
        Maukah Kamu Jadi Pasanganku?
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-delay">
        Aku panda imut yang butuh teman makan bambu selamanya 🎋
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative">
        <button
          onClick={onYes}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center gap-3 animate-pulse-soft"
        >
          <PandaIcon type="happy" size={32} />
          IYA 🐼❤️
        </button>

        <button
          onClick={moveNoButton}
          style={
            noClickCount > 0
              ? {
                  position: 'fixed',
                  left: `${noButtonPos.x}px`,
                  top: `${noButtonPos.y}px`,
                  transition: 'all 0.3s ease-out'
                }
              : {}
          }
          className={`bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-6 px-12 rounded-full text-2xl shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center gap-3 ${
            noClickCount > 0 ? 'animate-shake' : ''
          }`}
        >
          <PandaIcon type={noClickCount > 0 ? 'cry' : 'shy'} size={32} />
          NANTI DULU 🐼💦
        </button>
      </div>

      {noClickCount > 0 && (
        <div className="mt-8 animate-fade-in">
          <PandaIcon type="cry" size={80} />
          <p className="text-gray-600 text-lg mt-4">
            {noClickCount === 1 && "Panda sedih nih... 🥺"}
            {noClickCount === 2 && "Masa iya nggak mau sama panda imut? 😢"}
            {noClickCount >= 3 && "Panda nangis nih... coba klik lagi deh 😭"}
          </p>
        </div>
      )}

      {showForceModal && (
        <ForceYesModal onYes={handleForceYes} />
      )}
    </div>
  );
}
