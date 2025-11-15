export default function FloatingBubbles() {
  const bubbles = [
    { text: 'Aku suka kamu 🐼❤️', delay: 0, left: '10%', duration: 8 },
    { text: 'Mau nggak jadi pasangan?', delay: 2, left: '80%', duration: 10 },
    { text: 'Yuk makan bambu bareng!', delay: 4, left: '20%', duration: 9 },
    { text: 'Kamu imut banget!', delay: 6, left: '70%', duration: 11 },
    { text: 'Jadi pacarku ya? 🎋', delay: 3, left: '50%', duration: 10 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute animate-float-bubble"
          style={{
            left: bubble.left,
            bottom: '-100px',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        >
          <div className="bg-white bg-opacity-90 rounded-full px-6 py-3 shadow-lg border-2 border-pink-200">
            <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
              {bubble.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
