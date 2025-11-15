import { useEffect, useState } from 'react';
import PandaIcon from './PandaIcon';

interface ForceYesModalProps {
  onYes: () => void;
}

export default function ForceYesModal({ onYes }: ForceYesModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center transform transition-all duration-500 ${
          show ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <div className="animate-shake mb-6">
          <PandaIcon type="cry" size={100} />
        </div>

        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Yakin nggak mau panda imut ini?
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Panda bakal nangis terus nih kalau ditolak... 😢
        </p>

        <button
          onClick={onYes}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center gap-3 mx-auto animate-pulse-soft"
        >
          <PandaIcon type="happy" size={32} />
          Baiklah, IYA deh ❤️
        </button>

        <p className="text-sm text-gray-400 mt-6">
          (Panda janji bakal baik sama kamu!)
        </p>
      </div>
    </div>
  );
}
