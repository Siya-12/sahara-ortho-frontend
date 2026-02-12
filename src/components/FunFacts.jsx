import { useEffect, useState } from "react";
import funBg from "../assets/img/bg-fun.png";

const facts = [
  "✈️ Most orthopaedic implants don’t trigger airport metal detectors.",
  "🦴 Maxillofacial implants are tiny yet incredibly precise.",
  "🔨 Yes, orthopaedic surgeons really use hammers.",
  "🧠 Spinal implants act like a GPS system for your backbone.",
  "🦾 Orthopaedic patients often become accidental cyborgs.",
  "🦴 Bones heal stronger after implants.",
  "🛠️ The Ilizarov system helps bones grow longer.",
];

export default function FunFactsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 2500); // 2.5 second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 text-center overflow-hidden bg-cover bg-no-repeat bg-center"style={{backgroundImage:`url(${funBg})`}}>
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-2
         bg-clip-text font-changa bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600
    bg-clip-border text-transparent">Fun Facts</h2>
      <p className="text-gray-500 mb-8">
        Because even serious science has a fun side.
      </p>

      {/* Carousel container */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {facts.map((fact, i) => (
            <div
              key={i}
              className="min-w-full flex-col justify-center"
            >
              <p className="text-xl text-gray-800 font-medium tracking-wide">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
