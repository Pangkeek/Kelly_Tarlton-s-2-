import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Page3() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e] flex">
      <div className="w-1/2 pl-158px">
        <p className="text-zinc-400 text-2xl pb-6 Regular">Context</p>
        <p className="text-white text-xl Light" data-aos='fade-right' data-aos-duration='850'>
          Kelly Tarlton's Life is founded by Kelvin Ewart
          <br />
          Tarlton. Kelly pursue a career of marine exploration
          <br />
          and dedicated his lives to Treasure Hunt and
          <br />
          Shipwreck discovery
        </p>
        <p className="text-white mt-6 text-xl Light"  data-aos='fade-right' data-aos-duration='850' data-aos-delay='150'>
          This background of Kelly Tatlton's career on
          <br />
          Teasure Hunt is later use to inspire the AR project
          <br /> premises
        </p>
      </div>
      <div className="w-1/2 pl-158px">
        <p className="text-zinc-400 text-2xl pb-6 Medium">Target Consumer</p>
        <p className="text-white text-xl Light" data-aos='fade-left' data-aos-duration='850'>
          On the official Kelly Tarlton's website, they started
          <br />
          "we often sell out during our busy periods such as
          <br />
          mornings weekends, school holidays and public
          <br />
          holiday". This suggest that mostly the target
          <br />
          consumer are high-school/middle schoolers and <br />
          juniors are the main guests that go to Kelly Tarlton's
        </p>
        <p className="text-white mt-6 text-xl Light" data-aos='fade-left' data-aos-duration='850' data-aos-delay='150'>
          As the target consumers are young, accessibility
          <br />
          would be considered in this AR porject. High
          <br />
          contrasting colour, guides and easy to navigate-
          <br />
          navigation system would needed to be
          <br />
          implemented
        </p>
      </div>
    </div>
  );
}
