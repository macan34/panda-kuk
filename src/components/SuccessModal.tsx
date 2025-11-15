import { useEffect, useState } from 'react';
import PandaIcon from './PandaIcon';
import Confetti from './Confetti';

export default function SuccessModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <>
      <Confetti />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div
          className={`bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full text-center transform transition-all duration-500 ${
            show ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        >
          <div className="animate-jump mb-6">
            <PandaIcon type="love" size={120} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            Yay! 🎉
          </h2>

          <p className="text-2xl text-gray-700 mb-6">
            Kamu resmi jadi pasangan aku!
          </p>

          <div className="bg-pink-50 rounded-2xl p-6 mb-6">
            <p className="text-lg text-gray-600">
              Sekarang kita bisa makan bambu bareng-bareng selamanya! 🎋❤️
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="animate-bounce-slow" style={{ animationDelay: '0s' }}>
              <PandaIcon type="happy" size={48} />
            </div>
            <div className="animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
              <PandaIcon type="love" size={48} />
            </div>
            <div className="animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
              <PandaIcon type="eat" size={48} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
