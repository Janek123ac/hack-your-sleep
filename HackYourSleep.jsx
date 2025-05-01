import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HackYourSleep() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@0.9.427/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-white to-green-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-800">
          Hack Your Sleep
        </h1>
        <p className="text-lg md:text-xl text-green-700 max-w-2xl">
          Lepszy sen w 7 dni. Biohackingowy zestaw oparty na nauce, regeneracji i technologii.
        </p>
        <div className="w-full h-[500px] mt-10">
          <spline-viewer url="https://prod.spline.design/Ji4l7o6U7tGrLWhL/scene.splinecode"></spline-viewer>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-900 mb-6">Co zawiera zestaw?</h2>
          <ul className="space-y-4 text-green-800">
            <li>- Magnez (treonian lub bisglicynian)</li>
            <li>- L-teanina</li>
            <li>- Ashwagandha (KSM-66 lub Sensoril)</li>
            <li>- Melatonina (niska dawka)</li>
            <li>- Okulary blokujace niebieskie swiatlo</li>
            <li>- PDF: Sen w 7 dni (plan dzialania + nawyki)</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-100 to-white text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-green-900"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}>
          Zacznij swoj sen od nowa
        </motion.h2>
        <p className="mt-4 text-lg text-green-700">
          Zmien swoje wieczory i poranki. Odkryj potencjal snu.
        </p>
        <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-2xl shadow-xl hover:bg-green-800 transition">
          Kup teraz
        </button>
      </section>
    </div>
  );
}