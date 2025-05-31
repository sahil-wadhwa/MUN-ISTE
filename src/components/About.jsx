import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const About = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.globe.min");
      if (!vantaEffect) {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x000000,
            color2: 0x777777,
            size: 1.3,
            backgroundColor: 0xe35151,
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full h-full min-h-screen flex flex-col max-sm:items-center max-sm:justify-center  text-white p-6 sm:p-10">
      <div className="text-3xl sm:text-4xl font-extrabold mb-6 text-start max-sm:text-center">About CUMUN</div>

      <h1 className="text-base sm:text-lg font-medium z-10 max-w-4xl text-justify">
        The Chandigarh University Model United Nations (CUMUN) Conference is a premier platform for
        young leaders to engage in diplomatic simulations, addressing global challenges through
        debate, research, and collaboration. Established in 2015, CU MUN has grown into one of
        India’s most prestigious MUN conferences, attracting diverse talent from across the nation.
      </h1>

      <div className="text-xl sm:text-2xl mt-10 font-extrabold text-center uppercase">Our Previous Edition</div>

      <div className="w-full max-w-3xl mt-6">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          autoPlay
          muted
          loop
        >
          <source src="/assets/clip1.MOV" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
