
import { Lightbulb } from 'lucide-react';

const colors = [
  'bg-red-400',
  'bg-orange-400',
  'bg-yellow-300',
  'bg-lime-400',
  'bg-cyan-300',
  'bg-indigo-500',
  'bg-pink-400',
];

const EnergySaver = () => {
  return (
    <div className="bg-[#121212] text-white py-10 px-4 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Minimize energy waste.</h2>
      <p className="text-sm sm:text-base text-center text-gray-300 max-w-xl mx-auto mb-10">
        Designed to put you in control of your home’s illumination while helping you save energy.
        You can adjust your lighting to perfectly suit your needs and reduce energy consumption.
      </p>

      <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-6">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center justify-end">
            <div className={`w-10 sm:w-12 ${color} rounded-t-lg`} style={{ height: `${100 - index * 5}px` }}></div>
            <div className="w-10 sm:w-12 h-8 bg-neutral-800 rounded-b-lg flex justify-center items-center">
              <Lightbulb size={16} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergySaver;
