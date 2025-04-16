// components/IntuitiveAppControl.tsx
import Image from 'next/image';

const IntuitiveAppControl = () => {
  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Intuitive app control.</h2>
        <div className="lg:flex lg:items-center lg:justify-center">
          {/* Left Side (Desktop) / Top (Mobile) */}
          <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
            <p className="mb-4">
              Control your home&apos;s climate anytime, anywhere—right from your{' '}
              <strong className="font-semibold">Apple Watch or Android smartwatch</strong>. Instant access to
              comfort with just a tap or voice command.
            </p>
            <p>
              With CuriouslyFly&apos;s app-controlled HVAC system, experience effortless climate control, smarter
              scheduling, and complete peace of mind all from your smartphone.
            </p>
          </div>

          {/* Center Image */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <Image
              src="/images/apple-watch.png" // Replace with the actual path to your image
              alt="Apple Watch showing app control"
              width={300} // Adjust as needed
              height={300} // Adjust as needed
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side (Desktop) / Bottom (Mobile) */}
          <div className="lg:w-1/3 lg:pl-8 text-center lg:text-right">
            <p className="mb-4">
              Take full control of your home&apos;s climate with the CuriouslyFly App designed to give you instant access,
              smarter automation, and seamless comfort from anywhere in the world.
            </p>
            <p>
              From sunrise to bedtime, our system learns your habits, <strong className="font-semibold">saves energy</strong>,
              and delivers perfect comfort without lifting a finger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntuitiveAppControl;