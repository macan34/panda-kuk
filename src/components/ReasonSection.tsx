import PandaIcon from './PandaIcon';

export default function ReasonSection() {
  const reasons = [
    {
      icon: 'happy',
      title: 'Panda yang Setia',
      desc: 'Aku bakal selalu ada buat kamu, kayak bambu yang nggak pernah habis',
    },
    {
      icon: 'eat',
      title: 'Suka Makan Bareng',
      desc: 'Kita bisa makan bambu... eh maksudnya cemilan bareng!',
    },
    {
      icon: 'love',
      title: 'Cinta yang Tulus',
      desc: 'Cintaku se-tulus bambu yang segar dan hijau',
    },
    {
      icon: 'sleep',
      title: 'Nyaman Banget',
      desc: 'Bareng aku dijamin hidup nyaman kayak tidur di atas bambu',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-12">
        Kenapa Harus Pilih Panda Ini? 🐼
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 animate-bounce-slow">
                <PandaIcon type={reason.icon as any} size={64} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-500 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-pink-100 via-white to-green-100 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Love Meter 💖
          </h3>
          <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-pink-600 animate-fill-meter rounded-full"></div>
            <div className="absolute top-0 right-4 h-full flex items-center">
              <div className="animate-swing">
                <PandaIcon type="love" size={32} />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Cintaku ke kamu: 100% (dan terus bertambah!)
          </p>
        </div>
      </div>
    </div>
  );
}
