import { useState } from 'react';
import HeroSection from './components/HeroSection';
import SuccessModal from './components/SuccessModal';
import ReasonSection from './components/ReasonSection';
import FloatingBubbles from './components/FloatingBubbles';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const handleYes = () => {
    setShowSuccess(true);
  };

  const handleNo = () => {
    setNoClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50 relative overflow-hidden">
      <FloatingBubbles />

      <HeroSection
        onYes={handleYes}
        onNo={handleNo}
        noClickCount={noClickCount}
        setNoClickCount={setNoClickCount}
      />

      <ReasonSection />

      {showSuccess && <SuccessModal />}
    </div>
  );
}

export default App;
